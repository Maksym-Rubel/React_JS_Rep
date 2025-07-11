import React from 'react'
import "./BluredCard.css"
export default function BluredCard() {
    return (
        <>
            <svg className='blursvg'>
                <defs>
                    <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.4)" />
                        <stop offset="46%" stop-color="rgba(255, 255, 255, 0)" />
                        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.4)" />
                    </linearGradient>
                </defs>
                <rect className='blurrec'
                    x="0"
                    y="0"
                    rx="35"
                    yx="35"
                    width="500"
                    height="600"
                    fill="transparent"></rect>
                <p>dsadasd</p>
            </svg>

        </>
    )
}
// d="M0,0 C100,50 400,50 500,0 V600 H0 Z"
// Q0,0 35,0
// Q500,0 500,30
// "M0,0 C0,50 500,50 600,0  V565 Q500,600 465,600 H35 Q0,600 0,565 Z"
//  <svg className='blursvg1'>
//                 {/* <defs>
//                     <filter id="blurMe" x="-10%" y="-10%" width="120%" height="120%">
//                         <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
//                     </filter>
//                 </defs> */}
//                 <path
//                     d="M0,35 Q0,0 35,15 C100,40 400,40 465,15 Q500,0 500,35 V565 Q500,600 465,600 H35 Q0,600 0,565 Z"
//                     fill="none"
//                     stroke="black"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                 />

//             </svg>