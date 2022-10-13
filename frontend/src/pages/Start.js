import React from 'react'
import classes from './Start.module.css'
import ParticleBackground from './ParticleBackground'
import {Container, Center} from '@mantine/core'


export default function Start() {
    const buttonHandler = () => {
        window.location.replace("https://statifyapp-backend.herokuapp.com/")
    }

    return (
    <>
        <Container>
            <Center>
                <ParticleBackground />
            </Center>
        </Container>
        <Container>
            <Center>
                <body className={classes.body}>
                    <div className={classes.content} title="Statify">
                    Statify
                    </div>
                </body>
            </Center>
        </Container>
        <Container>
            <Center>
                    <p className={classes.text}>Get your personal Spotify Playlist data</p>
            </Center>
        </Container>
        <Container>
            <Center>
                <div>
                    <button onClick={buttonHandler} className={classes.button}>See Your Results</button>
                </div>
            </Center>
        </Container>
        
    </>
    );
}