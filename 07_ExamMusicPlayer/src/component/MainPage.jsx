import React, { useContext, useEffect, useState } from 'react'
import "./MainPage.css"
import PlayList from './PlayList'
import { CounterContext } from '../context/curent_song.jsx';

export default function MainPage({ playList1 }) {
  const { Current_Song_Playlist } = useContext(CounterContext);
  useEffect(() => {
    console.log("MainPage context updated:", Current_Song_Playlist);
  }, [Current_Song_Playlist]);
  //  const [playlist, setPlaylist] = React.useState(playlists);
  return (
    <>
      <div className='MainDivOrig'>
        <div className='PlaylistInfo'>
            <img className='AlbumImage' src="/public/imgs/Master_of_Puppets_cover.jpg"></img>
        </div>
        <div className='MainPageBack1'>
          <PlayList playlist={Current_Song_Playlist}></PlayList>
        </div>
      </div>
    </>

  )
}
