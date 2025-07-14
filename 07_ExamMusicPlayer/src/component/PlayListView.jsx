import React, { useContext } from 'react'
import "./PlayListView.css"
import { CounterContext } from '../context/curent_song.jsx';

export default function PlayListView({ index, title, author, cover, SongList }) {

  const { Current_Song_Playlist, setCurrent_Song_Playlist } = useContext(CounterContext);
  const { setCurrent_ID } = useContext(CounterContext);

  function SetPlaylist() {
    
  }

  function setALL()
  {
    setCurrent_Song_Playlist(SongList);

    setCurrent_ID(index);
    console.log(index);
  }
  return (
    <div onClick={() => setALL()} className='PlayListMenu'>
      <img className='ImgMain' src={cover} alt="" />
      <div className='PlayListMenuText'>
        <h3 className='PlayListName'>{title}</h3>
        <p className='PlayListAuthor'>{author}</p>
      </div>
    </div>
  )
}
