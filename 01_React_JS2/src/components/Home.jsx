import React from 'react'
import { Link } from 'react-router-dom'
import AllPage from './AllPage'

import Menu from './Menu.jsx'

import "./NavBar.css";
export default function Home() {
    return (
        <div className='FullRow'>

            <AllPage></AllPage>
            {/* <Menu></Menu> */}
        </div>
    )
}
