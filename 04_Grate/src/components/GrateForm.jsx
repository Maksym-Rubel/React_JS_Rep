import React from 'react'
import "./GrateForm.css"
export default function GrateForm({rating,text1,text2,text3}) {
    return (
        <>
            <div className='Block'>
                <div className='Row'>
                    <p className='Tititle'>Анна</p>
                    <p className='Date'>18 квітня 2025</p>
                </div>
                <p className='Stars'>{rating}</p>
                
                <p className='Text1'>{text1}</p>
                <p className='Text2'><span className='Span'>Переваги:</span>{text2}</p>
                <p className='Text3'><span className='Span'>Недоліки:</span>{text3}</p>


            </div>
        </>

    )
}
