import React from 'react'
import "./LeftMenu.css"
import PlayListView from './PlayListView'
export default function LeftMenu({playlists}) {

    console.log(playlists[1][0]);
    const [playlist, setPlaylist] = React.useState(playlists);
    return (
        <>
            <div className='AllMenuLeft'>
                <div className='left-menu-header'>
                    <div className='PositionDiv'>
                        <svg className='blursvg3'>
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
                        <input className='SearchPlaylist' type="text" />
                    </div>
                    <div className='PositionDiv'>
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
                <div className='left-menu'>

                    <div>
                        {
                            playlist.map((item) => (
                                <PlayListView {...item[0]}></PlayListView>
                            ))
                        }
                       
                        
                    </div>
                </div>
            </div>
        </>

    )
}
