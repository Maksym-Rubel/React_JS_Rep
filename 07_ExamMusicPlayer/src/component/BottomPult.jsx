import React, { use, useEffect, useRef, useState } from 'react'
import './BottomPult.css'
import { CounterContext } from '../context/curent_song.jsx';
import { useContext } from 'react';
import ColorThief from 'colorthief';
export default function BottomPult({ playlist, SongList }) {

    const { value, setValue, Current_Song_Playlist, setCurrent_Song_Playlist } = useContext(CounterContext);
    const { Current_ID, setCurrent_ID } = useContext(CounterContext);

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [PlayListAudio, setPlayListAudio] = useState(playlist);
    const [ALLPlaylistAudio, setALLPlaylistAudio] = useState(playlist);
    const [SongLists, setSongLists] = useState(SongList);


    const [volume, setVolume] = useState(0.5);
    const [currentTime, setTime] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [gradients, setGradient] = useState("");
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [IsNextPrev, setNextPrev] = useState(false);
    const repeatRef = useRef(repeat);
    const shuffleRef = useRef(shuffle);
    const CurrentId_Ref = useRef(Current_ID);
    const [favorite, setFavorite] = useState(PlayListAudio[currentSongIndex].favorite);

    const Current_Song_PlaylistRef = useRef(Current_Song_Playlist);
    useEffect(() => {
        CurrentId_Ref.current = Current_ID;
    }, [Current_ID]);
    useEffect(() => {
        Current_Song_PlaylistRef.current = Current_Song_Playlist

    }, [Current_Song_Playlist]);
    useEffect(() => {
        console.log("ChangeStart")

    }, [CurrentId_Ref]);
    useEffect(() => {
        repeatRef.current = repeat;
    }, [repeat]);

    // useEffect(() => {
    //     console.log("Увесь SongLists:", SongLists);
    //     console.log("Улюблені:", SongLists.filter(song => song.favorite));
    //     console.log("ALLPlaylistAudio перед оновленням:", ALLPlaylistAudio);
    //     console.log("ALLPlaylistAudio перед оновленням:", ALLPlaylistAudio[0][0].SongList);
    //     console.log(Current_ID)

    //     // setALLPlaylistAudio(updated);
    // }, [Current_Song_Playlist]);
    // useEffect(() => {

    //     ALLPlaylistAudio[0][0].SongList = SongLists.filter(song => song.favorite);
    // }, [])

    useEffect(() => {
        shuffleRef.current = shuffle;
    }, [shuffle]);
    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;
        audioRef.current.addEventListener('ended', () => {
            if (shuffleRef.current && !repeatRef.current) {
                console.log("Shuffle is on");
                console.log("Repat is " + repeatRef.current);
                console.log("Shuffle is " + shuffle);

                RandomSong();
            }
            else if (!shuffleRef.current && !repeatRef.current) {
                console.log("NExt is on");
                console.log("Repat is " + repeat);
                console.log("Shuffle is " + shuffle);
                NextSongButton();
            }
            else if (repeatRef.current && !shuffleRef.current) {
                console.log("Repat is on");
                console.log("Repat is " + repeat);
                console.log("Shuffle is " + shuffle);
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }
            }
            else if (shuffleRef.current && repeatRef.current) {
                console.log("Repeat is on");
                console.log("Repat is " + repeat);
                console.log("Shuffle is " + shuffle);
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
        });
    }, [audioRef.current])
    useEffect(() => {
        console.log("Current ID = " + Current_ID)

        if (Current_ID === 0) {
            console.log("ChangePRoces")

            const filteredSongs = SongLists.filter(song => song.favorite);
            const isSame = JSON.stringify(Current_Song_Playlist) === JSON.stringify(filteredSongs);

            if (!isSame) {
                console.log("ChangePRoces");
                setCurrent_Song_Playlist(filteredSongs);
            }
        }
        else {
            console.log("You lox")
        }
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
        if (IsNextPrev) {
            setNextPrev(false);
        }
        else {
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
        }

    }, [value]);
    useEffect(() => {
        setValue(currentSongIndex);
    }, [currentSongIndex])
    // useEffect(() => {
    //     const audio = audioRef.current;
    //     if (!audio) return;

    //     const handleEnded = () => {
    //         console.log("Track ended");
    //         NextSong();
    //     };

    //     audio.addEventListener("ended", handleEnded);


    // }, []);
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



    function getDominantColor() {
        let dominantColor;
        const colorThief = new ColorThief();
        const img = document.querySelector('#imgs1');
        if (img.complete && img.naturalWidth !== 0) {
            dominantColor = colorThief.getPalette(img, 2)[0];

            const gradientStr = `linear-gradient(
                  to left, 
                  rgba(24,24,24,0.96) 0%, 
                   rgba(24,24,24,0.96) 10%, 
                  rgba(${dominantColor.join(',')},0.2) 50%,
                  rgba(24,24,24,0.96)97%, 
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
                  rgba(24,24,24,0.96) 10%, 
                  rgba(${dominantColor.join(',')},0.2) 50%,
                  rgba(24,24,24,0.96)97%, 
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
        console.log(Current_Song_Playlist)


        setValue(currentSongIndex);
        if (!audioRef.current) {
            audioRef.current = new Audio(PlayListAudio[currentSongIndex].src);
        }
        const isNewAudio = !audioRef.current || audioRef.current.src !== PlayListAudio[currentSongIndex].src;

        if (!isPlaying) {
            if (isNewAudio) {
                audioRef.current.play();
                audioRef.current.volume = volume;
                setIsPlaying(true);

                audioRef.current.addEventListener('loadedmetadata', () => {
                    setDuration(audioRef.current.duration);

                });

                audioRef.current.addEventListener("timeupdate", onTimeUpdate);
            }

        } else {
            audioRef.current.pause();

            setIsPlaying(false);
        }


        // setValue(currentSongIndex);

        // const isNewAudio = !audioRef.current || audioRef.current.src !== PlayListAudio[currentSongIndex].src;

        // if (isNewAudio) {
        //     if (audioRef.current) {
        //         audioRef.current.pause();
        //     }

        //     audioRef.current = new Audio(PlayListAudio[currentSongIndex].src);
        //     audioRef.current.volume = volume;





        // }

        // if (!isPlaying) {
        //     audioRef.current.play();
        //     setIsPlaying(true);
        //     audioRef.current.addEventListener("timeupdate", onTimeUpdate);
        // } else {
        //     audioRef.current.pause();
        //     setIsPlaying(false);
        // }
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
    function getNextIndex() {
        let nextindex;
        if (PlayListAudio.length == currentSongIndex + 1) {
            console.log("Playlist list length ==> " + PlayListAudio.length)
            console.log(currentSongIndex)
            // setCurrentSongIndex(0);
            // setValue(0);
            nextindex = 0;
            console.log("hello is 0");

        }
        else {
            console.log("Playlist list length ==> " + PlayListAudio.length)
            // setCurrentSongIndex((currentSongIndex + 1));
            // setValue(currentSongIndex + 1);
            console.log("Current Index ==> " + (currentSongIndex + 1));

            nextindex = currentSongIndex + 1;
            console.log("nextindex Index ==> " + nextindex);
            console.log("hello");

        }
        setCurrentSongIndex(nextindex);
        setValue(nextindex);

        return nextindex
    }
    function NextSong() {
        setNextPrev(true);

        setCurrentSongIndex((previndex) => {
            const nextindex = (previndex + 1) % PlayListAudio.length;


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

            return nextindex;
        });


    }
    function NextSongButton() {
        setNextPrev(true);
        let nextindex = getNextIndex();

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
        setNextPrev(true);

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
    const onTimeUpdate = () => {
        setTime(Math.floor(audioRef.current.currentTime));
    };

    function RepeatSong() {


        setRepeat(!repeat);
        console.log("Reapeat is " + repeat);

    }
    function ChaingeFavoriteToggle() {
        const updated = [...PlayListAudio]
        updated[currentSongIndex] = {
            ...updated[currentSongIndex],
            favorite: !updated[currentSongIndex].favorite
        }
        setPlayListAudio(updated);
    }
    function ShuffleSongs() {
        setShuffle(!shuffle);
        console.log("Shuffle is " + shuffle);

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
                <div onClick={ChaingeFavoriteToggle } className={PlayListAudio[currentSongIndex].favorite ? "SongImgtrue" : "SongImgfalse"}></div>
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
                            <button onClick={() => NextSongButton()} className='ButtonNextPrev'><div className="ImgIconNext"></div></button>
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
                <p className='Time'>{formatTime(currentTime)}/{formatTime(duration) == NaN ? "" : formatTime(duration)}</p>
                <img src="" alt="" />
                <input type="range" className='Range' value={volume} onChange={ChangeVolume} name="volume" min="0" max="1" step="0.1"
                    style={{
                        background: `linear-gradient(to right, #f6f6f6 ${volume * 100}%, #636363 ${volume * 100}%)`
                    }} />
            </div>
        </div>

    )
}
