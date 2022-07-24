import React from 'react'
import classes from './Start.module.css'
import ParticleBackground from './ParticleBackground'



export default function Start() {
    
    const buttonHandler = () => {
        window.location.replace("https://accounts.spotify.com/authorize?client_id=8d8af266e27f4ca4b997bf3b1d9def67&response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Fscores&scope=user-library-read")
    }

    return (
    <>
        <ParticleBackground />
        <body className={classes.body}>
            <div className={classes.content} title="Statify">
            Statify
            </div>
        </body>
            <div>
                <p className={classes.text}>Get your personal Spotify Playlist data</p>
            </div>
            <div>
                <button onClick={buttonHandler} className={classes.button}>See Your Results</button>
            </div>
        
    </>
    );
}