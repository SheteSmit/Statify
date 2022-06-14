import spotipy
from flask import Flask, request, url_for, session, redirect
from spotipy import SpotifyOAuth
import time

app = Flask(__name__)

app.secret_key = ""
app.config['SESSION_COOKIE_NAME'] = 'Smits Cookie'
TOKEN_INFO = "token_info"
clientId = ""
clientSecret = ""

with open('app_secret.txt') as f:
    app.secret_key = f.read()

with open('client_secret.txt') as f:
    clientSecret = f.read()

with open('client_id.txt') as f:
    clientId = f.read()

@app.route('/')
def login():
    sp_oauth = create_spotify_oauth()
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)

@app.route('/redirect')
def redirectPage():
    sp_oauth = create_spotify_oauth()
    session.clear()
    code = request.args.get('code')
    token_info = sp_oauth.get_access_token(code)
    session[TOKEN_INFO] = token_info
    return redirect('getTracks')

@app.route('/getTracks')
def getTracks():
    
    try:
        global token_info
        token_info = get_token()
    except:
        print("user not logged in")
        return redirect("/")

    sp = spotipy.Spotify(auth=token_info['access_token'])

    all_playLists = []
    iteration = 0
    counter = 0
    total_score = 0
    avg_score= 0
    profile_obscurity_score = 0
    playlist_count = 0
    image_list = []

    while True:
        items = sp.current_user_playlists(limit=50, offset=iteration * 50)['items']
        iteration += 1

        for idx, item in enumerate(items):
            playlist_count += 1
            id = item['id']
            name = item['name']
            image_list.append(item['images'][0]['url'])
            iteration2 = 0
            all_items = sp.playlist_tracks(id, limit=100, offset=iteration2 * 100)['items']
            iteration2 += 1
            for j in all_items:
                if j is not None and j['track'] is not None and j['track']['popularity'] is not None:
                    total_score += j['track']['popularity']
                    counter += 1
            avg_score = int(total_score/counter)
            profile_obscurity_score += avg_score
            all_playLists += [str("Playlist Name: " + name + " | Obscurity Score: " + str(avg_score))]
        if (len(items) < 50):
            break
    
    res = [all_playLists]
    res.append(int(profile_obscurity_score/playlist_count))
    res.append(image_list)
    
    response_body = { 
         "playlists": res[0], #+ " ~~~~~~~~~~~~~~ Average Score: " + str(int(profile_obscurity_score/playlist_count)))
         "avg_score": res[1],
         "images": res[2]
    }

    return response_body

def get_token():
    global token_info
    token_info = session.get(TOKEN_INFO, None)
    if not token_info:
        raise "exception"
    now = int(time.time())
    is_expired = token_info['expires_at'] - now < 60
    if (is_expired):
        sp_oauth = create_spotify_oauth()
        token_info = sp_oauth.refresh_access_token(token_info['refresh_token'])
    return token_info

def create_spotify_oauth():
    return SpotifyOAuth(
        client_id=clientId,
        client_secret=clientSecret,
        redirect_uri=url_for('redirectPage', _external=True),
        scope="user-library-read" 
    )