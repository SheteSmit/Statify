import React from 'react'
import classes from "./Playlist.module.css"
import Card from '../ui/Card'
import grids from '../ui/Grid.module.css'

export default function Playlist(props) {

  let num = document.querySelector(":root")
  return (
    
    <li className={classes.item}>
      <Card>
        <div className={grids.grid}>
          <div className={grids.square.fullImg}>
            <div className={classes.image}>
              <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h2 className={classes.content}>{props.title}</h2>
            </div>
          </div>
            <div className={grids.square}>
              {num.style.setProperty('--danceBox', props.dance)}
              <div className={grids.square.items}>
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

                {num.style.setProperty('--energyBox', props.energy)}
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
              </div>
              {num.style.setProperty('--acousticBox', props.acoustic)}
              <div className={grids.square.items}>
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

                {num.style.setProperty('--valenceBox', props.valence)}
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
            </div>
          </div>
        </div>
      </Card>
    </li>
  )
}