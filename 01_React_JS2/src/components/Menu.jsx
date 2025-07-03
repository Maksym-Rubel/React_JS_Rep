import React from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom';
export default function Menu() {
    return (
        <div className='DivMenu'>
            <Link to="/home">
                <div className='btn'>
                    <img className='TextImg' src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg" alt="" />
                    <p className='Text'>Home

                    </p>
                </div>
            </Link>
            <Link to="/blogs">
                <div className='btn'>
                    <img className='TextImg' src="https://icons.veryicon.com/png/o/miscellaneous/member-circle-im/about-12.png" alt="" />
                    <p className='Text'>About

                    </p>
                </div>
            </Link>


            <div className='btn'><img className='TextImg' src="https://приз.укр/image/95?w=500&h=500&stamp=585303285" alt="" /><p className='Text'>ShowText</p></div>
            <div className='btn'><img className='TextImg' src="https://приз.укр/image/95?w=500&h=500&stamp=585303285" alt="" /><p className='Text'>ShowText</p></div>
            <div className='btn'><img className='TextImg' src="https://приз.укр/image/95?w=500&h=500&stamp=585303285" alt="" /><p className='Text'>ShowText</p></div>
            <div className='btn'><img className='TextImg' src="https://приз.укр/image/95?w=500&h=500&stamp=585303285" alt="" /><p className='Text'>ShowText</p></div>
            <div className='btn'><img className='TextImg' src="https://приз.укр/image/95?w=500&h=500&stamp=585303285" alt="" /><p className='Text'>ShowText</p></div>

        </div>
    );
}
