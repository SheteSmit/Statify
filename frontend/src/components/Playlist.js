import React from 'react'
import classes from "./Playlist.module.css"
import Card from '../ui/Card'

export default function Playlist(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
        <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
        </div>
      </Card>
    </li>
  )
}