import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomPult from './component/BottomPult'
import LeftMenu from './component/LeftMenu'
import MainPage from './component/MainPage'
import Layout from './component/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './component/HomePage'

function App() {
  const PLAYLIST_Song = [
    {
      title: "Master of Puppets",
      artist: "Metallica",
      src: "/public/songs/MasterOfPuppets.mp3",
      cover: "/public/imgs/Master_of_Puppets_cover.jpg"
    },
    {
      title: "Creep",
      artist: "Radiohead",
      src: "/public/songs/Creep.mp3",
      cover: "/public/imgs/creep.jpg"
    },
    {
      title: "I Wass Made For Lovin' You",
      artist: "Kiss",
      src: "/public/songs/IWasMadeForLovingYou.mp3",
      cover: "/public/imgs/iwasmadeforlovin.jpg"
    },
    {
      title: "Every Breath You Take",
      artist: "The Police",
      src: "/public/songs/EveryBreathYouTake.mp3",
      cover: "/public/imgs/the-police2003.jpg"
    },
    {
      title: "I Don't Know Why",
      artist: "Imagine Dragons",
      src: "/public/songs/IDontWannaKnowWhy.mp3",
      cover: "/public/imgs/idontwanna.webp"
    },
    {
      title: "Bones",
      artist: "Imagine Dragons",
      src: "/public/songs/imagine-dragons-bones.mp3",
      cover: "/public/imgs/bones.jpg"
    }
  ]
  const PLAYLIST_Song2 = [
    {
      title: "I Wass Made For Lovin' You",
      artist: "Kiss",
      src: "/public/songs/IWasMadeForLovingYou.mp3",
      cover: "/public/imgs/iwasmadeforlovin.jpg"
    },
    {
      title: "Every Breath You Take",
      artist: "The Police",
      src: "/public/songs/EveryBreathYouTake.mp3",
      cover: "/public/imgs/the-police2003.jpg"
    },
    {
      title: "I Don't Know Why",
      artist: "Imagine Dragons",
      src: "/public/songs/IDontWannaKnowWhy.mp3",
      cover: "/public/imgs/idontwanna.webp"
    },
    {
      title: "Bones",
      artist: "Imagine Dragons",
      src: "/public/songs/imagine-dragons-bones.mp3",
      cover: "/public/imgs/bones.jpg"
    }
  ]
  const PLAYLISTS_Info1 = [
    {
      id:0,
      title: "My Playlist",
      author: "Maksym",
      cover: "/public/imgs/iwasmadeforlovin.jpg",
      SongList: PLAYLIST_Song
    }
  ];
  const PLAYLISTS_Info2 = [
    {
      id:1,
      title: "My Playlist2",
      author: "Maksym",
      cover: "/public/imgs/bones.jpg",
      SongList: PLAYLIST_Song2

    }
  ];
  const ALLPLayLISt = [
    PLAYLISTS_Info1,
    PLAYLISTS_Info2
  ];
  return (
    <>
      {/* <div className='CollumMain'>
        <div className='RowMain'>
          <LeftMenu playlists={ALLPLayLISt}></LeftMenu>
          <MainPage playList1={PLAYLIST_Song}></MainPage>
        </div>
        <div className='RowMain2'>
          <BottomPult playlist={PLAYLIST_Song}></BottomPult>
        </div>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout PLAYLIST_Song={ALLPLayLISt} />}>
            <Route index element={<HomePage playList1={PLAYLIST_Song} />} />
            <Route path="playlist" element={<MainPage playList1={ALLPLayLISt} />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
