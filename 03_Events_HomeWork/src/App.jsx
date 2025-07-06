import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import CardList from './components/CardList.jsx'

function App() {
  const cardsData = [
    {
      id: 1,
      imgsrc: "https://fenixcentr.dp.ua/image/cache/catalog/articles/132307232-1000x1000.jpg",
      title: "Кувалда Juco Традиція 5 кг (М2117)",
      rating: 4.5,
      quantity: 10,
      price: 299,
      favorite: true,
      koshyk: false,
      sale: 0

    },
    {
      id: 2,
      imgsrc: "https://metalvis.ua/ProdImg/besshhjotochnyj-shurupovert-bs-18-lt-bl.png",
      title: "Безщітковий шуруповерт BS 18 LT BL",
      rating: 4.0,
      quantity: 5,
      price: 199,
      favorite: true,
      koshyk: false,
      sale: 0


    },
    {
      id: 3,
      imgsrc: "https://content.rozetka.com.ua/goods/images/big/308363254.jpg",
      title: "Інверторний генератор MaxPeedingRods MXR3500, 3,0/3,3 кВт",
      rating: 5.0,
      quantity: 2,
      price: 399,
      favorite: false,
      koshyk: false,
      sale: 50


    },
    {
      id: 1,
      imgsrc: "https://fenixcentr.dp.ua/image/cache/catalog/articles/132307232-1000x1000.jpg",
      title: "Кувалда Juco Традиція 5 кг (М2117)",
      rating: 4.5,
      quantity: 10,
      price: 299,
      favorite: true,
      koshyk: false,
      sale: 10
    },
    {
      id: 2,
      imgsrc: "https://metalvis.ua/ProdImg/besshhjotochnyj-shurupovert-bs-18-lt-bl.png",
      title: "Безщітковий шуруповерт BS 18 LT BL",
      rating: 4.0,
      quantity: 5,
      price: 199,
      favorite: true,
      koshyk: false,
      sale: 5


    },
    {
      id: 3,
      imgsrc: "https://content.rozetka.com.ua/goods/images/big/308363254.jpg",
      title: "Інверторний генератор MaxPeedingRods MXR3500, 3,0/3,3 кВт",
      rating: 5.0,
      quantity: 2,
      price: 399,
      favorite: false,
      koshyk: false,
      sale: 20



    }
  ];
  
  return (
    <>
      

      <CardList tasklist={cardsData}></CardList>


    </>
  )
}

export default App
