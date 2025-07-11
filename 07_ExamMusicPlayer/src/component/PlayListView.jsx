import React, { useContext } from 'react'
import "./PlayListView.css"
import { CounterContext } from '../context/curent_song.jsx';

export default function PlayListView({title, author,SongList}) {

  const {Current_Song_Playlist, setCurrent_Song_Playlist } = useContext(CounterContext);
  function SetPlaylist()
  {
    console.log("Hello")
    console.log(SongList)
    setCurrent_Song_Playlist(SongList);
  }
  return (
    <div onClick={SetPlaylist} className='PlayListMenu'>
        <img className='ImgMain' src="/public/imgs/Master_of_Puppets_cover.jpg" alt="" />
        <div className='PlayListMenuText'>
            <h3 className='PlayListName'>{title}</h3>
            <p className='PlayListAuthor'>{author}</p>
        </div>
    </div>
  )
}
