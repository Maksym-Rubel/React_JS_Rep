import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListCard from './functionFolder/CardSlot.jsx'

import './App.css'


function App() {


  const Movies = [
    {
      id:1,
      imgSrc:"https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
      title:"Назва фільму",
      year:2024,
      rating:8
    },
    {
      id:2,
      imgSrc:"https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
      title:"Назва фільму",
      year:2024,
      rating:8
    },
    {
      id:3,
      imgSrc:"https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
      title:"Назва фільму",
      year:2024,
      rating:8
    },
    {
      id:4,
      imgSrc:"https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
      title:"Назва фільму",
      year:2024,
      rating:8
    },
    {
      id:5,
      imgSrc:"https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
      title:"Назва фільму",
      year:2024,
      rating:8
    },
    {
      id:6,
      imgSrc:"https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
      title:"Назва фільму",
      year:2024,
      rating:8
    },
    {
      id:7,
      imgSrc:"https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
      title:"Назва фільму",
      year:2024,
      rating:8
    },
    {
      id:8,
      imgSrc:"https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
      title:"Назва фільму",
      year:2024,
      rating:8
    },

  ];

  return (
    <ListCard movieList={Movies}></ListCard>
  )
}

export default App
