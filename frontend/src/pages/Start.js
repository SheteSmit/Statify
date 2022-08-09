import React from 'react'
import classes from './Start.module.css'
import ParticleBackground from './ParticleBackground'
import { useNavigate } from 'react-router-dom';



export default function Start() {
    const navigate = useNavigate();
    const buttonHandler = () => {
        window.location.replace("https://statifyapp-backend.herokuapp.com/")
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