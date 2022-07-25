const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require("cors")
const bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())

CLIENT_ID = ""
CLIENT_SECRET = ""

var fs = require("fs");
CLIENT_ID = fs.readFileSync("client_id.txt").toString('utf-8');
CLIENT_SECRET = fs.readFileSync("client_secret.txt").toString('utf-8');


app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://127.0.0.1:3000/scores",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken,
    })

    spotifyApi.refreshAccessToken().then(
        (data) => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in
            })
        }
    ).catch(err => {
        res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
    console.log('getting code')
    const code = req.body.code
    console.log('getting api call')
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://127.0.0.1:3000/scores",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET
    })
    console.log('calling api')
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(err => {
        res.sendStatus(400)
    })
})

app.listen(3002)