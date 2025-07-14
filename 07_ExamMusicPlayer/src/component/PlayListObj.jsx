import React, { useContext } from 'react'
import "./PlayListObj.css"
import { CounterContext } from '../context/curent_song.jsx';

export default function PlayListObj({id,title, artist, src,cover}) {
    const { value,setValue } = useContext(CounterContext);
    const { setCurrent_ID } = useContext(CounterContext);

    console.log(value, id);
    
    return (
        <>
            <div onDoubleClick={() => setValue(id)} className= {value == id ? "PlayListMenu2" : "PlayListMenu1"}>
                <p className='idNum'>{id + 1}</p>
                <img className='ImgMain' src={cover} alt="" />
                <div className='PlayListMenuText'>
                    <h3 className={value == id ? "PlayListNameActive" : "PlayListName"}>{title}</h3>
                    <p className='PlayListAuthor'>{artist}</p>
                </div>
            </div>

        </>
    )
}
