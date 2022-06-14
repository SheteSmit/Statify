import React from 'react'
import Playlist from './Playlist'
import classes from "./PlaylistList.module.css"

export default function PlaylistList(props) {
  
    var items = []
    for (let index = 0; index < props.playLists.playlists.length; index++) {
        
        items.push(<Playlist 
            title = {props.playLists.playlists[index]}
            image = {props.playLists.images[index]}
        />)
    }

    return (
        <ul className={classes.list}>
            {items}
        </ul>
    )
}