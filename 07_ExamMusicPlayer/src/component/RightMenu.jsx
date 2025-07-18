import React, { useContext, useEffect, useState } from 'react'
import "./RightMenu.css"
import PlayListView from './PlayListView'
import { CounterContext } from '../context/curent_song.jsx';
export default function RightMenu({ playlists }) {

    const { value, setValue, Current_Song_Playlist, setCurrent_Song_Playlist } = useContext(CounterContext);

    const [playlist, setPlaylist] = useState(Current_Song_Playlist);
    useEffect(() => {
        setPlaylist(Current_Song_Playlist);
    }, [Current_Song_Playlist]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 801);
    // useEffect(() => {
    //     const mediaQuery = window.matchMedia("(max-width: 801px)");
    //     const handleChange = (e) => {
    //         setIsMobile(e.matches);
    //     };
    //     handleChange(mediaQuery);
    //     mediaQuery.addEventListener("change", handleChange);
    //     return () => mediaQuery.removeEventListener("change", handleChange);
    // }, []);
    function GetCover() {
        return playlist.find((i, index) => index === value)?.cover;
    }
    function GetTittle() {
        return playlist.find((i, index) => index === value)?.title;
    }
    function GetArtist() {
        return playlist.find((i, index) => index === value)?.artist;
    }
    return (
        <>
            <div className={isMobile ? "AllMenuLeftHidden" : "AllMenuLeft"}>
                <div className='left-menu1'>
                    <img className='imgSet' src={GetCover()}></img>
                    <div>
                        <h3 className='PlayListName1'>{GetTittle()}</h3>
                        <p className='PlayListAuthor1'>{GetArtist()}</p>
                    </div>
                </div>
            </div>
        </>

    )
}
