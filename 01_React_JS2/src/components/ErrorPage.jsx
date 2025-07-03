import React from 'react'
import "./ErrorPage.css"
import { Link } from 'react-router-dom'



export default function ErrorPage() {



  return (
    <>
      <div className="ImageDiv">
        <img className="Img" src="https://i.imgur.com/jUghj1c.jpg" alt="" />
        <Link to="/home">
          <button className="btnImg">Exit</button>
        </Link>

      </div>
    </>
  )
}
