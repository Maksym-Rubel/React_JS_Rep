import React, { useContext, useEffect, useState } from 'react'
import './HomePage.css'
import PlaylistMainShow from './playlistMainShow'
import { CounterContext } from '../context/curent_song.jsx';

export default function HomePage({ playList1 }) {
    const [playlist, setPlaylist] = useState(playList1);
    const {gradientstrmenu, setGradientstrMenu} = useContext(CounterContext);
    useEffect(() => {
        console.log(gradientstrmenu);
    },[gradientstrmenu]);
    
    return (
        <>
            <div className='MainPageBack'
            style={{
                background: gradientstrmenu
            }}>
                <div className='PlayListList'>
                    {
                        playlist.map((item, index) => (
                            <PlaylistMainShow {...item[0]} index={index}></PlaylistMainShow>
                        ))}

                </div>


            </div>
        </>
    )
}
