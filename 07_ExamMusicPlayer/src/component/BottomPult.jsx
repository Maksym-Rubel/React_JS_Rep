import React from 'react'
import './BottomPult.css'

export default function BottomPult() {
    return (
        <div className='MainBottomPult'>
            <div className='Row1'>
                <img className='SongImg' src="https://upload.wikimedia.org/wikipedia/ru/4/4f/Shape_of_You_single_cover.jpg" alt="" />
                <div className='CollumnInRow'>
                    <div className='SongName'>Shape of You</div>
                    <div className='ArtistName'>Ed Sheeran</div>
                </div>
                <img className='SongImg1' src="https://cdn-icons-png.flaticon.com/512/158/158722.png" alt="" />
            </div>
            <div className='Row2'>
                <button className='Button'>Shuffle</button>
                <button className='Button'>Previous</button>


                <div className='PositionDiv'>

                    <svg className='blursvg'>
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
                            width="60"
                            height="60"
                            fill="transparent"></rect>
                        <p>dsadasd</p>
                    </svg>
                    <button className='ButtonPlay'><img className='ImgIcon' src="../imgs/playicon.png" alt="" /></button>
                </div>

                <button className='Button'>Next</button>
                <button className='Button'>Repeat</button>

            </div>
            <div className='Row3'>
                <img src="https://upload.wikimedia.org/wikipedia/ru/4/4f/Shape_of_You_single_cover.jpg" alt="" />
                <div className='CollumnInRow'>
                    <div className='SongName'>Song Name</div>
                    <div className='ArtistName'>Artist Name</div>
                </div>
                <img src="" alt="" />
            </div>
        </div>
    )
}
