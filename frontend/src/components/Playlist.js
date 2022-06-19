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
            <h2>{props.title}</h2>
            <h3>Danceability: {props.dance}%</h3>
            <h3>Energy: {props.energy}%</h3>
            <h3>Acousticness: {props.acoustic}%</h3>
            <h3>Happiness: {props.valence}%</h3>
        </div>
        <div className={classes.dashboard}>
          
            <svg>
                
                <circle className={classes.bg} cx="57" cy="57" r="52" />
                <circle className={classes.meter_1} cx="57" cy="57" r="52" />
                
            </svg>
            <svg>
                <circle className={classes.bg} cx="57" cy="57" r="52" />
                <circle className={classes.meter_2} cx="57" cy="57" r="52" />
            </svg>
            <svg>
                <circle className={classes.bg} cx="57" cy="57" r="52" />
                <circle className={classes.meter_3} cx="57" cy="57" r="52" />
            </svg>
        </div>
      </Card>
    </li>
  )
}