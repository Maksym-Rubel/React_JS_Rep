import React from 'react'
import "./Card.css"
export default function Card({avatarsrc,name,nickname,location,gitsrc,blogsrc,mail,folowers,folowing}) {
    return (
        <>
            <div className='MainCard'>
                <div className='CardRow'>
                    <img className='ImgCard' src={avatarsrc} alt="" />
                    <div className='CardCollum'>
                        <h2 className='BoldTextH2'>{name}</h2>
                        <p className='GrayText'>{nickname}</p>
                    </div>
                </div>
                <div className='CardRow'>
                    <img className='ImgIcon' src="/imgs/location.png" alt="" />
                    <p className='BoldText'>Location:<span className='SpanText'>{location == null ? "No location" : location}</span></p>
                </div>
                <div className='CardRow'>
                    <img className='ImgIcon' src="/imgs/git.png" alt="" />
                    <p className='BoldText'>Github:<span className='SpanText'>{gitsrc}</span></p>
                </div>
                <div className='CardRow'>
                    <img className='ImgIcon' src="/imgs/blog.png" alt="" />
                    <p className='BoldText'>Blog:<span className='SpanText'>{blogsrc == "" ? "No blog" : blogsrc}</span></p>
                </div>
                <div className='CardRow'>
                    <img className='ImgIcon' src="/imgs/mail.png" alt="" />
                    <p className='BoldText'>Email:<span className='SpanText'>{mail == null ? "No email" : mail}</span></p>
                </div>
                <hr className='hrbt'></hr>
                <div className='CardRowBt'>
                    <div className='CardCollum1'>
                        <div className='CardRow'>
                            <img className='ImgIconBt' src="/imgs/folowers.png" alt="" />
                            <p className='BoldTextBt'>{folowers}</p>
                        </div>
                        <p className='SpanText1'>folowers</p>
                    </div>
                    <div className='CardCollum1'>
                        <div className='CardRow'>
                            <img className='ImgIconBt' src="/imgs/follow.png" alt="" />
                            <p className='BoldTextBt'>{folowing}</p>
                        </div>
                        <p className='SpanText1'>folowings</p>
                    </div>
                </div>

            </div>
        </>
    )
}
