import React, { useEffect, useRef, useState } from 'react'
import './BottomPult.css'
import { CounterContext } from '../context/curent_song.jsx';
import { useContext } from 'react';
import ColorThief from 'colorthief';
export default function BottomPult({ playlist }) {

    const { value, setValue, Current_Song_Playlist, setCurrent_Song_Playlist } = useContext(CounterContext);

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [SongEnded, setSongEnded] = useState(false);

    const [PlayListAudio, setPlayListAudio] = useState(playlist);




    const [volume, setVolume] = useState(0.5);
    const [currentTime, setTime] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [gradients, setGradient] = useState("");
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    useEffect(() => {

        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }

        setPlayListAudio(Current_Song_Playlist);
        setCurrentSongIndex(0);
        setValue(0);
        audioRef.current = new Audio(Current_Song_Playlist[0].src);
        audioRef.current.addEventListener('loadedmetadata', () => {
            setDuration(audioRef.current.duration);

        });

        audioRef.current.addEventListener("timeupdate", onTimeUpdate);

    }, [Current_Song_Playlist]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.pause();
        }
        setCurrentSongIndex(value);
        audioRef.current = new Audio(Current_Song_Playlist[value].src);
        audioRef.current.addEventListener('loadedmetadata', () => {
            setDuration(audioRef.current.duration);

        });
        audioRef.current.volume = volume;

        audioRef.current.addEventListener("timeupdate", onTimeUpdate);
        audioRef.current.play();
        setIsPlaying(true);
    }, [value]);
    function getRandomSongIndex(currentIndex, playlistLength) {
        if (playlistLength <= 1) return 0;

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * playlistLength);
        } while (randomIndex === currentIndex);

        return randomIndex;
    }

    function RandomSong() {
        const randomIndex = getRandomSongIndex(currentSongIndex, PlayListAudio.length);
        setCurrentSongIndex(randomIndex);
        setValue(randomIndex);
        audioRef.current = new Audio(PlayListAudio[randomIndex].src);
        audioRef.current.play();
        audioRef.current.volume = volume;
        setIsPlaying(true);

        audioRef.current.addEventListener('loadedmetadata', () => {
            setDuration(audioRef.current.duration);

        });

        audioRef.current.addEventListener("timeupdate", onTimeUpdate);
    }

    const onTimeUpdate = () => {
        if (audioRef.current.currentTime === audioRef.current.duration) {
            if (shuffle && !repeat) {
                console.log("Shuffle is on");
                RandomSong();
            }
            else if (!shuffle && !repeat) {
                console.log("NExt is on");

                NextSong();
            }
            else if (repeat) {
                console.log("Repat is on");

                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
            else if (shuffle && repeat) {
                console.log("Repeat is on");

                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }

        }
        // console.log("Time update", audioRef.current.currentTime);
        setTime(Math.floor(audioRef.current.currentTime));
    };

    function getDominantColor() {
        let dominantColor;
        const colorThief = new ColorThief();
        const img = document.querySelector('#imgs1');
        if (img.complete && img.naturalWidth !== 0) {
            dominantColor = colorThief.getPalette(img, 2)[0];

            const gradientStr = `linear-gradient(
                  to left, 
                  rgba(24,24,24,0.96) 0%, 
                  rgba(24,24,24,0.96) 93%, 
                  rgb(${dominantColor.join(',')}) 100%

                )`;
            setGradient(gradientStr);
        }
        else {
            img.addEventListener('load', function () {
                dominantColor = colorThief.getPalette(img, 2)[0];

                const gradientStr = `linear-gradient(
                  to left, 
                  rgba(24,24,24,0.96) 0%, 
                  rgba(24,24,24,0.96)93%, 
                  rgb(${dominantColor.join(',')}) 100%

                )`;
                setGradient(gradientStr);
            });
        }




    }

    useEffect(() => {
        getDominantColor();
        console.log(gradients)
    }, [currentSongIndex]);
    function formatTime(seconds1) {
        const totalSeconds = Math.floor(seconds1);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }


    function PlayAudio() {
        setValue(currentSongIndex);
        if (!audioRef.current) {
            audioRef.current = new Audio(PlayListAudio[currentSongIndex].src);
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
        const newTime = parseFloat(e.target.value);
        setTime(newTime);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
    }
    function NextSong() {

        let nextindex;
        if (PlayListAudio.length == currentSongIndex + 1) {
            setCurrentSongIndex(0);
            setValue(0);
            nextindex = 0;
        }
        else {
            setCurrentSongIndex((currentSongIndex + 1));
            setValue(currentSongIndex + 1);
            nextindex = currentSongIndex + 1;
        }

        if (isPlaying) {
            audioRef.current.pause();
        }
        audioRef.current = new Audio(PlayListAudio[nextindex].src);
        audioRef.current.play();
        audioRef.current.volume = volume;
        setIsPlaying(true);

        audioRef.current.addEventListener('loadedmetadata', () => {
            setDuration(audioRef.current.duration);

        });

        audioRef.current.addEventListener("timeupdate", onTimeUpdate);
    }
    function PrevSong() {
        let nextindex;
        if (currentSongIndex - 1 < 0) {
            setCurrentSongIndex(PlayListAudio.length - 1);
            setValue(PlayListAudio.length - 1);
            nextindex = PlayListAudio.length - 1;
        }
        else {
            setCurrentSongIndex((currentSongIndex - 1));
            setValue(currentSongIndex - 1);
            nextindex = currentSongIndex - 1;
        }

        if (isPlaying) {
            audioRef.current.pause();
        }
        audioRef.current = new Audio(PlayListAudio[nextindex].src);
        audioRef.current.play();
        audioRef.current.volume = volume;
        setIsPlaying(true);

        audioRef.current.addEventListener('loadedmetadata', () => {
            setDuration(audioRef.current.duration);

        });

        audioRef.current.addEventListener("timeupdate", onTimeUpdate);
    }
    function RepeatSong() {
        console.log("Reapeat is " + repeat);

        setRepeat(!repeat);
        console.log("Reapeat is " + repeat);

    }

    function ShuffleSongs() {
        setShuffle(!shuffle);
        console.log("Repeat is " + shuffle);

    }
    return (


        <div className='MainBottomPult'

            style={{
                background: gradients
            }}>
            <div className='Row1'>
                <img className='SongImg' id='imgs1' src={PlayListAudio[currentSongIndex].cover} alt="" />
                <div className='CollumnInRow'>
                    <div className='SongName'>{PlayListAudio[currentSongIndex].title}</div>
                    <div className='ArtistName'>{PlayListAudio[currentSongIndex].artist}</div>
                </div>
                <img className='SongImg1' src="https://cdn-icons-png.flaticon.com/512/158/158722.png" alt="" />
            </div>
            <div className='Row2'>
                <div className='CollumnInRow2'>
                    <div className='Row2Buttons'>
                        <div className='PositionDiv'>

                            <svg className='blursvg2'>
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
                                    rx="15"
                                    yx="15"
                                    width="60"
                                    height="40"
                                    fill="transparent"></rect>
                                <p>dsadasd</p>
                            </svg>
                            <button onClick={() => ShuffleSongs()} className='ButtonNextPrev'><div className={shuffle ? "ImgIconShuffleActive" : "ImgIconShuffle"}></div></button>
                        </div>
                        <div className='PositionDiv'>

                            <svg className='blursvg1'>
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
                                    width="50"
                                    height="50"
                                    fill="transparent"></rect>
                                <p>dsadasd</p>
                            </svg>
                            <button onClick={() => PrevSong()} className='ButtonNextPrev'><div className={"ImgIconPrev"}></div></button>
                        </div>

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
                            <button onClick={() => PlayAudio()} className='ButtonPlay'><div className={isPlaying ? "ImgIconPause" : "ImgIcon"}></div></button>
                        </div>
                        <div className='PositionDiv'>

                            <svg className='blursvg1'>
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
                                    width="50"
                                    height="50"
                                    fill="transparent"></rect>
                                <p>dsadasd</p>
                            </svg>
                            <button onClick={() => NextSong()} className='ButtonNextPrev'><div className="ImgIconNext"></div></button>
                        </div>
                        <div className='PositionDiv'>

                            <svg className='blursvg2'>
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
                                    rx="15"
                                    yx="15"
                                    width="60"
                                    height="40"
                                    fill="transparent"></rect>
                                <p>dsadasd</p>
                            </svg>
                            <button onClick={() => RepeatSong()} className='ButtonNextPrev'><div className={repeat ? "ImgIconRepeatActive" : "ImgIconRepeat"}></div></button>
                        </div>

                    </div>
                    <div className='TimeDiv'>
                        <input type="range" className='Range1' value={currentTime} onChange={ChangeTime} name="volume" min="0" max={duration || 0} step={0.1}
                            style={{
                                background: `linear-gradient(to right, #f6f6f6 ${currentTime * 100 / duration}%, #636363 ${currentTime * 100 / duration}%)`
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
