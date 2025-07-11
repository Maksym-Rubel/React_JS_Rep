import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import BottomPult from './BottomPult'
import LeftMenu from './LeftMenu'
import './Layout.css'
import RightMenu from './RightMenu'
export default function Layout({ PLAYLIST_Song }) {
    return (
        <div className='Layout'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/playlist">Playlist</Link></li>
                    </ul>
                </nav>
            </header>
            <div className='RowMain'>
                <aside className="LeftMenu">
                    <LeftMenu playlists={PLAYLIST_Song} />
                </aside>
                <main className='MainPage1'>
                    <Outlet />
                </main>
                <aside className="LeftMenu">
                    <RightMenu playlists={PLAYLIST_Song} />
                </aside>
            </div>

            <footer className='footerLast'>

                <BottomPult playlist={PLAYLIST_Song}></BottomPult>
            </footer>
        </div>
    )
}
