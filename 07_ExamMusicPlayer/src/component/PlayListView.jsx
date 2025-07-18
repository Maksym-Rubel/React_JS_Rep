import React, { useContext } from 'react'
import "./PlayListView.css"
import { CounterContext } from '../context/curent_song.jsx';
import { Link } from 'react-router-dom';

export default function PlayListView({ index, title, author, cover, SongList }) {

  const { Current_Song_Playlist, setCurrent_Song_Playlist } = useContext(CounterContext);
  const { setCurrent_ID } = useContext(CounterContext);



  function setALL() {
    if (SongList.length > 0 && SongList != null && SongList != undefined) {
      setCurrent_Song_Playlist(SongList);

    }
    else if(SongList.length === 0)
    {
      console.log("Плейлист порожній")
      setCurrent_ID(0);

    }
    setCurrent_ID(index);
    console.log(index);
  }
  return (
    <Link className='linkmenu' to="/playlist"><div onClick={() => setALL()} className='PlayListMenu'>

      <img className='ImgMain' src={cover} alt="" />
      <div className='PlayListMenuText'>
        <h3 className='PlayListName'>{title}</h3>
        <p className='PlayListAuthor'>{author}</p>
      </div>
    </div></Link>

  )
}
