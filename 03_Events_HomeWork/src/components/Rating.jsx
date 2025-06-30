import React from 'react'
import "./Rating.css"
export default function Rating({ rating }) {


    function ShowRating(rating) {
        let stars="";
        for (let i = 1; i <= rating; i++) {
            stars+="★"
            
        }
        return <span className='YellowStar'>{stars}</span>
    }
    return (
        ShowRating(rating)
    )
}
