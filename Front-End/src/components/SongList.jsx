import React, { useState } from 'react'
import SongItem from './SongItem'

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
        {songsArray
        .filter((currentSongObj, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem key={index} index={index} {...currentSongObj} />
        ))}
        {items >= songsArray.length ? 
        null : 
        <p className="song-list__see-more" onClick={() => {setItems(prevItems => prevItems + 5)}}>Ver Mais</p>}
    </div>
  )
}

export default SongList
