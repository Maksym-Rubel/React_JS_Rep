import React, { useState } from 'react'
import './Card.css'
import Rating from './Rating.jsx'

export default function Card({ imgsrc, title, rating, quantity, price,favorite,koshyk,sale }) {

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
    function cutTitle(title) 
    {
        if(title.length >= 40)
        {
            return title.slice(0, 40) + "...";
        }
        else
        {
            return title;
        }
    }

    return (
        <>
            
            <div className='CardDiv'>
                <div className= {sale > 0 ? 'discountDiv' : 'noDiscount'}>
                    <p className='discount'>-{sale}%</p>
                </div>
                <button onClick={() => FavoriteBtn()} className='CardBtn'><img className='buttonImg' src={favorites ? "/src/imgs/yellowHeart.png" : "/src/imgs/blackHeart.png"} alt="" /></button>
                <img className='CardImg' src={imgsrc} alt="" />
                <div className='TextDiv'>
                    <p className='CardTitle'>{cutTitle(title)}</p>
                    <p className='CardRating'><Rating rating={rating}></Rating></p>
                    <p className={quantity >= 1 ? "greenClass" : "redClass"}>{quantity >= 1 ? "Є в наявності" : "Немає в наявності"}</p>
                    <div className={sale <= 0 ? '' : 'noDiscount'}>
                        <p className='CardPrice'>{price} ₴</p>
                    </div>
                    <div className={sale > 0 ? 'AddDiscountText' : 'noDiscount'}>
                        <p className='CardPrice2'>{price} ₴</p>
                        <p className='CardPrice1'>{Math.round(price - (sale / 100 * price))} ₴</p>
                    </div>
                    
                </div>
                <button onClick={() => koshykesBtn()} className='CardBtn2'><img className='buttonImg' src={koshykes ? "/src/imgs/koshyk.png" : "/src/imgs/blackKoshyk.png"} alt="" /></button>

            </div>
        </>
    )
}
