import React, { useEffect, useRef, useState } from 'react'
import './BottomPult.css'

export default function BottomPult() {
    function formatTime(seconds1) {
        const totalSeconds = Math.floor(seconds1);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
    const onTimeUpdate = () => {
      setTime(Math.floor(audioRef.current.currentTime)); 
    };
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [currentTime, setTime] = useState(0);

    const [duration, setDuration] = useState(0);
    
    function PlayAudio() {
        if (!audioRef.current) {
            audioRef.current = new Audio("../public/songs/MasterOfPuppets.mp3");
        }
        if (!isPlaying) {
            audioRef.current.play();
            audioRef.current.volume = volume;
            setIsPlaying(true);

            audioRef.current.addEventListener('loadedmetadata', () => {
                setDuration(audioRef.current.duration);

            });
            
            audioRef.current.addEventListener("timeupdate", onTimeUpdate);


        } else {
            audioRef.current.pause();

            setIsPlaying(false);
        }
    }
    function ChangeVolume(e) {
        const newVolume = e.target.value;
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;

        }
    }
    function ChangeTime(e) {
        const newTime = e.target.value;
        setVolume(newTime);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;

        }
    }
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
                <div className='CollumnInRow2'>
                    <div className='Row2Buttons'>
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
                            <button onClick={() => PlayAudio()} className='ButtonPlay'><img className='ImgIcon' src="../imgs/playicon.png" alt="" /></button>
                        </div>

                        <button className='Button'>Next</button>
                        <button className='Button'>Repeat</button>
                    </div>
                    <div className='TimeDiv'>
                        <input type="range" className='Range1' value={currentTime} onChange={ChangeVolume} name="volume" min="0" max="100" step={duration/ 100}
                            style={{
                                background: `linear-gradient(to right, #f6f6f6 ${currentTime * 1}%, #636363 ${currentTime * 1}%)`
                            }} />
                    </div>
                </div>


            </div>
            <div className='Row3'>
                <p className='Time'>{formatTime(currentTime)}/{formatTime(duration)}</p>
                <img src="" alt="" />
                <input type="range" className='Range' value={volume} onChange={ChangeVolume} name="volume" min="0" max="1" step="0.1"
                    style={{
                        background: `linear-gradient(to right, #f6f6f6 ${volume * 100}%, #636363 ${volume * 100}%)`
                    }} />
            </div>
        </div>

    )
}
