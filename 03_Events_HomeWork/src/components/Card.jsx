import React, { useState } from 'react'
import './Card.css'
import Rating from './Rating.jsx'

export default function Card({ imgsrc, title, rating, quantity, price,favorite,koshyk }) {

    const [favorites, setList] = useState(favorite);
    const [koshykes, setKoshyk] = useState(koshyk);

    function FavoriteBtn()
    {
        setList(!favorites);
    }
    function koshykesBtn()
    {
        setKoshyk(!koshykes);
    }
    return (
        <>
            
            <div className='CardDiv'>
                <img src="" alt="" />
                <button onClick={() => FavoriteBtn()} className='CardBtn'><img className='buttonImg' src={favorites ? "/src/imgs/yellowHeart.png" : "/src/imgs/blackHeart.png"} alt="" /></button>
                <img className='CardImg' src={imgsrc} alt="" />
                <div className='TextDiv'>
                    <p className='CardTitle'>{title}</p>
                    <p className='CardRating'><Rating rating={rating}></Rating></p>
                    <p className={quantity >= 1 ? "greenClass" : "redClass"}>{quantity >= 1 ? "Є в наявності" : "Немає в наявності"}</p>
                    <p className='CardPrice'>{price}</p>
                </div>
                <button onClick={() => koshykesBtn()} className='CardBtn2'><img className='buttonImg' src={koshykes ? "/src/imgs/koshyk.png" : "/src/imgs/blackKoshyk.png"} alt="" /></button>

            </div>
        </>
    )
}
