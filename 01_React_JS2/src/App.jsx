import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllPage from './components/AllPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Layout from './components/Layout'
import ErrorPage from './components/ErrorPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout ></Layout >}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>
          <Route path='*' element={<ErrorPage></ErrorPage>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
