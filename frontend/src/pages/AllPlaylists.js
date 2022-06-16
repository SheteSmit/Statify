import React from 'react'
import { useState } from 'react'
import axios from "axios";
import PlaylistList from '../components/PlaylistList';
import classes from './AllPlaylists.module.css'
import { useNavigate } from 'react-router-dom';


export default function AllPlaylists() {
    
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState(null)
    
    axios({
    method: "GET",
    url:"/redirect",
    })
    .then((response) => {
    const res = response.data
    setProfileData(({
        playlists: res.playlists,
        avg_score: res.avg_score,
        images: res.images}))
    }).catch((error) => {
    if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
        //end of new line 

    function buttonHandler() {
        navigate('/')
    }

    return (
        <>
        
        <div>
            {profileData && <div>
                <h1 className={classes.head}>All Playlists: </h1>
                <PlaylistList playLists={profileData} />
                <h2 className={classes.head2}>Average Score: </h2>
                    <h2 className={classes.head2}>{profileData.avg_score}</h2>
                </div>
            }
        </div>
        <button className={classes.button} onClick={buttonHandler}>
            Back
        </button>
        </>
    );
}
