import React, { useContext, useEffect, useState } from 'react'
import "./MainPage.css"
import PlayList from './PlayList'
import { CounterContext } from '../context/curent_song.jsx';

export default function MainPage({ playList1 }) {
  const { Current_Song_Playlist } = useContext(CounterContext);
  const { Current_ID } = useContext(CounterContext);

  useEffect(() => {
    console.log("MainPage context updated:", Current_Song_Playlist);
  }, [Current_Song_Playlist]);
  const [playlist, setPlaylist] = React.useState(playList1);
  function getCover() {
    console.log()

  }
  getCover();
  return (
    <>
      <div className='MainDivOrig'>
        <div className='PlaylistInfo'>
          <img className='AlbumImage' src={playlist[Current_ID][0].cover}></img>
          <div>
            <h3 className='PlayListName22'>{playlist[Current_ID][0].title}</h3>
            <p className='PlayListAuthor22'>{playlist[Current_ID][0].author}</p>
          </div>
        </div>
        <div className='MainPageBack1'>
          <PlayList playlist={Current_Song_Playlist}></PlayList>
        </div>
      </div>
    </>

  )
}
