import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import BottomPult from './BottomPult'
import LeftMenu from './LeftMenu'
import './Layout.css'
import RightMenu from './RightMenu'
export default function Layout({ PLAYLIST_Song,SongList }) {
    return (
        <div className='Layout'>
            <header className='headerclass'>

                <div className='headerdv'>
                    <div className='PositionDivheader'>

                        <svg className='blursvg2header'>
                            <defs>
                                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="rgba(255, 255, 255, 0.4)" />
                                    <stop offset="46%" stop-color="rgba(255, 255, 255, 0)" />
                                    <stop offset="100%" stop-color="rgba(255, 255, 255, 0.4)" />
                                </linearGradient>
                            </defs>
                            <rect className='blurrecheader'
                                x="0"
                                y="0"
                                rx="50"
                                yx="50"
                                width="45"
                                height="45"
                                fill="transparent"></rect>
                            <p>dsadasd</p>
                        </svg>


                        <button className='ButtonNextPrev1'><Link className='linktext' to="/">M</Link><img className='imgicon' src="/imgs/home.png" alt="" /></button>
                    </div>
                    <div className='PositionDivheader'>

                        <svg className='blursvg2header1'>
                            <defs>
                                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="rgba(255, 255, 255, 0.4)" />
                                    <stop offset="46%" stop-color="rgba(255, 255, 255, 0)" />
                                    <stop offset="100%" stop-color="rgba(255, 255, 255, 0.4)" />
                                </linearGradient>
                            </defs>
                            <rect className='blurrecheader'
                                x="0"
                                y="0"
                                rx="20"
                                yx="20"
                                width="300"
                                height="45"
                                fill="transparent"></rect>
                            <p>dsadasd</p>
                        </svg>
                        <input className='SearchPlaylist1' type="text" />
                    </div>
                    <nav>
                        <ul>
                            {/* <li><Link to="/playlist">Playlist</Link></li> */}
                        </ul>
                    </nav>
                </div>

            </header>
            <div className='RowMain'>
                <aside className="LeftMenu">
                    <LeftMenu playlists={PLAYLIST_Song} />
                </aside>
                <main className='MainPage1'>
                    <Outlet />
                </main>
                <aside className="RightMenu">
                    <RightMenu playlists={PLAYLIST_Song} />
                </aside>
            </div>

            <footer className='footerLast'>

                <BottomPult playlist={PLAYLIST_Song} SongList={SongList}></BottomPult>
            </footer>
        </div>
    )
}
