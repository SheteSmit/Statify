import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import PlaylistList from '../components/PlaylistList';
import classes from './AllPlaylists.module.css'
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card.js'
import {Container, Center} from '@mantine/core'


export default function AllPlaylists() {
    
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState(null)

    useEffect(() => {
        
        setIsLoading(true)
        
        axios({
        method: "GET",
        url:"https://statify-447ae-default-rtdb.firebaseio.com/playlists.json",
        })
        .then((response) => {
        const json = response.data
        const key = Object.keys(json)[0]
        console.log(key)
        const res = json[key]
        console.log(res)
        setProfileData(({
            playlists: res.playlists,
            avg_score: res.avg_score,
            images: res.images,
            dance: res.dance,
            energy: res.energy,
            acoustic: res.acoustic,
            valence: res.valence}))
        setIsLoading(false)
        }).catch((error) => {
        if (error.response) {
            setIsLoading(false)
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
    }, []);
    
    function buttonHandler() {
        navigate('/')
    }
    if (isLoading) {
        return (
            <section>
                <h1 className={classes["head"]}>Loading...</h1>
                <h2 className={classes.head3}>Depending on the size/number of your playlists this process may take a few minutes</h2>
                <div className={classes.center}>
                    <div className={classes["wave"]}></div>
                    <div className={classes["wave"]}></div>
                    <div className={classes["wave"]}></div>
                    <div className={classes["wave"]}></div>
                    <div className={classes["wave"]}></div>
                    <div className={classes["wave"]}></div>
                    <div className={classes["wave"]}></div>
                    <div className={classes["wave"]}></div>
                    <div className={classes["wave"]}></div>
                    <div className={classes["wave"]}></div>
                </div>
            </section>
        )
    }
    return (
        <>
        <div>
            {profileData && <><div>
                <h1 className={classes.head}>All Playlists: </h1>
                <PlaylistList playLists={profileData} />
                <Container>
                <Center>
                    <Card>
                        <Container>
                            <Center>
                                <div className={classes.head2}>
                                    <h2 >Your Average Stats: </h2>
                                    <h2 >{profileData.avg_score}</h2>
                                </div>
                            </Center>
                        </Container>
                    </Card>
                </Center>
                </Container>
                </div>
                </>
            }
            
        </div>
        
        <button className={classes.button} onClick={buttonHandler}>
            Back
        </button>
        
        </>
    )  
}