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
        </div>

        <div className={classes.box_dance}>
          <div className={classes.percent}>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className={classes.num}>
              <h2>{props.dance}<span>%</span></h2>
            </div>
          </div>
          <h2 className={classes.text}>Danceability</h2>
        </div>

        <div className={classes.box_energy}>
          <div className={classes.percent}>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className={classes.num}>
              <h2>{props.energy}<span>%</span></h2>
            </div>
          </div>
          <h2 className={classes.text}>Energy</h2>
        </div>

        <div className={classes.box_acoustic}>
          <div className={classes.percent}>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className={classes.num}>
              <h2>{props.acoustic}<span>%</span></h2>
            </div>
          </div>
          <h2 className={classes.text}>Acousticness</h2>
        </div>

        <div className={classes.box_valence}>
          <div className={classes.percent}>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className={classes.num}>
              <h2>{props.valence}<span>%</span></h2>
            </div>
          </div>
          <h2 className={classes.text}>Valence</h2>
        </div>
      </Card>
    </li>
  )
}