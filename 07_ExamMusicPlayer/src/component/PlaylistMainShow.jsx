import React, { useContext, useRef } from 'react'
import "./PlaylistMainShow.css"
import { CounterContext } from '../context/curent_song.jsx';

import ColorThief from 'colorthief';
export default function PlaylistMainShow({ cover, title, id }) {
    const { gradientstrmenu, setGradientstrMenu } = useContext(CounterContext);

    const imgRef = useRef(null);


    function getDominantColor() {
        let dominantColor;
        const colorThief = new ColorThief();
        const img = imgRef.current;
        if (img.complete && img.naturalWidth !== 0) {
            dominantColor = colorThief.getPalette(img, 2)[0];

            const gradientStr = `linear-gradient(
                  to top, 
                  rgba(24,24,24,0.96) 0%, 
                  rgba(24,24,24,0.96)70%, 
                  rgba(${dominantColor.join(',')},.5) 100%

                )`;
            // console.log(gradientStr);
            setGradientstrMenu(gradientStr);
        }
        else {
            img.addEventListener('load', function () {
                dominantColor = colorThief.getPalette(img, 2)[0];

                const gradientStr = `linear-gradient(
                  to top, 
                  rgba(24,24,24,0.96) 0%,         
                  rgba(24,24,24,0.96)70%, 
                  rgba(${dominantColor.join(',')},.5) 100%

                )`;
                // console.log(gradientStr);
                setGradientstrMenu(gradientStr);
            });
        }




    }
    function getColor()
    {
        getDominantColor()
    }
    return (
        <div onMouseEnter={() => getColor()} className='Background'>
            <div className='BackRow'>
                <img className='imgMenu' ref={imgRef} src={cover} alt="" />
                <p className='PlayListName123'>{title}</p>
            </div>
            <div className='PositionDiv'>

                <svg className='blursvgMenu'>
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
                        rx="50"
                        yx="50"
                        width="45"
                        height="45"
                        fill="transparent"></rect>
                    <p>dsadasd</p>
                </svg>
                <button className='ButtonPlay'><div className='imgIconfalse'></div></button>
            </div>
        </div>
    )
}
