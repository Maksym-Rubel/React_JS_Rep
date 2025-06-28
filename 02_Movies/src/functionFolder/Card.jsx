import Star from './Star.jsx'

import './Card.css'
export default function Card({ id, imgSrc, title, year, rating, ChangeRating}) {


    
    return (
        <>
            <div onClick={() => ChangeRating(id)} className="PosterBack" id="mainPoster">
                <img className="PosterImage" src={imgSrc}></img>
                <h2 className="PosterTitle">{title}</h2>
                <div className='PosterYearRating'>
                    <p className="PosterYear">{year}</p>
                    <p className="PosterRating"><Star></Star></p>
                </div>


            </div>
        </>
    )



}