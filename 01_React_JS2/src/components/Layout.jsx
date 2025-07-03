import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './NavBar.css'
import Menu from './Menu'

export default function Layout() {
    return (
        <div className='Header'>

            <header>
                <div>
                    <nav>
                        <Menu></Menu>
                        
                    </nav>
                </div>
            </header>


            <div className='CollumnRow'>
                <main>
                    <Outlet></Outlet>
                </main>
                <footer>
                    <p>2025 my apllication</p>
                </footer>
            </div>

        </div>

    )
}
