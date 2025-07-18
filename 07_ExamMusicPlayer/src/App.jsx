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
  let Favorite_Song = [
    {
      title: "Master of 123131",
      artist: "Metallica",
      src: "/public/songs/MasterOfPuppets.mp3",
      cover: "/public/imgs/Master_of_Puppets_cover.jpg",
      favorite: true
    }
  ]
  let SongLists = [
    {
      title: "Master of Puppets",
      artist: "Metallica",
      src: "/public/songs/MasterOfPuppets.mp3",
      cover: "/public/imgs/Master_of_Puppets_cover.jpg",
      favorite: true
    },
    {
      title: "Creep",
      artist: "Radiohead",
      src: "/public/songs/Creep.mp3",
      cover: "/public/imgs/creep.jpg",
      favorite: false

    },
    {
      title: "I Wass Made For Lovin' You",
      artist: "Kiss",
      src: "/public/songs/IWasMadeForLovingYou.mp3",
      cover: "/public/imgs/iwasmadeforlovin.jpg",
      favorite: false

    },
    {
      title: "Every Breath You Take",
      artist: "The Police",
      src: "/public/songs/EveryBreathYouTake.mp3",
      cover: "/public/imgs/the-police2003.jpg",
      favorite: true

    },
    {
      title: "I Don't Know Why",
      artist: "Imagine Dragons",
      src: "/public/songs/IDontWannaKnowWhy.mp3",
      cover: "/public/imgs/idontwanna.webp",
      favorite: false

    },
    {
      title: "Bones",
      artist: "Imagine Dragons",
      src: "/public/songs/imagine-dragons-bones.mp3",
      cover: "/public/imgs/bones.jpg",
      favorite: false

    },
    {
      title: "For Whom The Bell Tolls",
      artist: "Metallica",
      src: "/public/songs/Metallica - For Whom The Bell Tolls.mp3",
      cover: "/public/imgs/forfrom.jpg",
      favorite: false

    }
  ]
  const PLAYLIST_Song = [
    SongLists[0],
    SongLists[1],
    SongLists[2],
    SongLists[3],
    SongLists[4],
    SongLists[5]
  ]
  const PLAYLIST_Song2 = [
    SongLists[1],
    SongLists[5],
    SongLists[3],
    SongLists[6]

  ]
  const PLAYLIST_Song3 = [
    SongLists[1],
    SongLists[5],
    SongLists[2],


  ]
  const PLAYLIST_Song4 = [
    SongLists[0],
    SongLists[6]

  ]
  let FavoriteSong_PlayList = [
    {
      id: 0,
      title: "Favorite",
      author: "Music",
      cover: "/public/imgs/all-my-favorite-songs.jpg",
      SongList: Favorite_Song
    }
  ];
  const PLAYLISTS_Info1 = [
    {
      id: 1,
      title: "My Playlist",
      author: "Maksym",
      cover: "/public/imgs/iwasmadeforlovin.jpg",
      SongList: PLAYLIST_Song
    }
  ];
  const PLAYLISTS_Info2 = [
    {
      id: 2,
      title: "My Playlisddddt2",
      author: "Maksym",
      cover: "/public/imgs/bones.jpg",
      SongList: PLAYLIST_Song2

    }
  ];
  const PLAYLISTS_Info3 = [
    {
      id: 3,
      title: "TestPlaylist",
      author: "Maksym",
      cover: "/public/imgs/bones.jpg",
      SongList: PLAYLIST_Song3

    }
  ];
  const PLAYLISTS_Info4 = [
    {
      id: 4,
      title: "Hello",
      author: "Maksym",
      cover: "/public/imgs/images.jpg",
      SongList: PLAYLIST_Song4

    }
  ];
  let ALLPLayLISt = [
    FavoriteSong_PlayList,
    PLAYLISTS_Info1,
    PLAYLISTS_Info2,
    PLAYLISTS_Info3,
    PLAYLISTS_Info4
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
          <Route path='/' element={<Layout PLAYLIST_Song={ALLPLayLISt} SongList={SongLists} />}>
            <Route index element={<HomePage playList1={ALLPLayLISt} />} />
            <Route path="playlist" element={<MainPage playList1={ALLPLayLISt} />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
