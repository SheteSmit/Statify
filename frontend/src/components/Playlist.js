import React from 'react'

export default function Playlist(props) {
  return (
    <li>
        <div>
        <img src={props.image} alt={props.title} />
        </div>
        <div>
            <h3>{props.title}</h3>
            <p>{props.score}</p>
        </div>
    </li>
  )
}