import React, { useEffect, useRef, useState } from 'react'
import "./LeftMenu.css"
import PlayListView from './PlayListView'
export default function LeftMenu({ playlists }) {


    const [playlist, setPlaylist] = useState(playlists);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        // const updated = [...playlist]
        // const filtered = playlist.filter(playlist =>
        //     playlist.title.includes(e.target.value)
        // );
        const updated = [...playlist]
        const playlist23 = [];
        updated.map(m => playlist23.push(m[0].title.Contains("Hello")))
        console.log(playlist23)
        // setPlaylist(filtered)
    };
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1200px)");
        const handleChange = (e) => {
            setIsMobile(e.matches);
        };
        handleChange(mediaQuery);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <>
            <div className='AllMenuLeft'>
                <div className={isMobile ? "left-menu-header-mob" : "left-menu-header"}>
                    <div className={isMobile ? "PositionDivActive" : "PositionDiv5"}>
                        <svg className="blursvg3">
                            <defs>
                                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="rgba(255, 255, 255, 0.4)" />
                                    <stop offset="46%" stop-color="rgba(255, 255, 255, 0)" />
                                    <stop offset="100%" stop-color="rgba(255, 255, 255, 0.4)" />
                                </linearGradient>
                            </defs>
                            <rect className='blurrec'
                                x="0"
                                y="0"
                                rx="10"
                                yx="10"
                                width="200"
                                height="40"
                                fill="transparent"></rect>
                            <p>dsadasd</p>
                        </svg>
                        <input

                            className='SearchPlaylist' type="text" value={inputValue} onChange={handleInputChange} />
                    </div>
                    <div className='PositionDiv4'>
                        <svg className='blursvg22'>
                            <defs>
                                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="rgba(255, 255, 255, 0.4)" />
                                    <stop offset="46%" stop-color="rgba(255, 255, 255, 0)" />
                                    <stop offset="100%" stop-color="rgba(255, 255, 255, 0.4)" />
                                </linearGradient>
                            </defs>
                            <rect className='blurrec'
                                x="0"
                                y="0"
                                rx="10"
                                yx="10"
                                width="40"
                                height="40"
                                fill="transparent"></rect>
                            <p>dsadasd</p>
                        </svg>
                        <button className='ButtonNextPrev'><div className='AddPlayList'></div></button>
                    </div>
                    <div className={!isMobile ? "PositionDivActive" : "PositionDiv5"}>
                        <svg className='blursvg22'>
                            <defs>
                                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="rgba(255, 255, 255, 0.4)" />
                                    <stop offset="46%" stop-color="rgba(255, 255, 255, 0)" />
                                    <stop offset="100%" stop-color="rgba(255, 255, 255, 0.4)" />
                                </linearGradient>
                            </defs>
                            <rect className='blurrec'
                                x="0"
                                y="0"
                                rx="10"
                                yx="10"
                                width="40"
                                height="40"
                                fill="transparent"></rect>
                            <p>dsadasd</p>
                        </svg>
                        <button className='ButtonNextPrev'><div className='AddPlayList'></div></button>
                    </div>
                </div>
                <div className={isMobile ? "left-menu-mob" : "left-menu"}>

                    <div>
                        {
                            playlist.map((item, index) => (
                                <PlayListView {...item[0]} index={index}></PlayListView>
                            ))
                        }


                    </div>
                </div>
            </div>
        </>

    )
}
