import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BluredCard from './components/BluredCard.jsx'

function App() {


  return (
    <>
      <img className='backgroundimage' src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="" />

      <div className='divmain'>
          <BluredCard></BluredCard>

          {/* <BluredCard></BluredCard> */}

      </div>

    </>
  )
}

export default App
