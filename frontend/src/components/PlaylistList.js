import React from 'react'
import Playlist from './Playlist'

export default function PlaylistList(props) {
  return (
    <ul>
        {props.playlists.map(playlist => (
            <Playlist 
                image={playlist.image}
                title={playlist.title}
                score={playlist.score}
            />
        ))}
    </ul>
  )
}