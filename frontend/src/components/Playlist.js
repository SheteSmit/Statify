import React from 'react'
import classes from "./Playlist.module.css"

export default function Playlist(props) {
  return (
    <li >
        <div >
        <img src={props.image} alt={props.title}  />
        </div>
        <div >
            <h3>{props.title}</h3>
        </div>
    </li>
  )
}