import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import GetData from './components/GetData'

function App() {

  return (
    <>
      <div className='MainWindow'>
        <GetData></GetData>
      </div>

    </>
  )
}

export default App
