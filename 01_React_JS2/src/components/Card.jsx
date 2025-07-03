
import './Card.css'

export default function Card({ id, src, title, year }) {
    return (
        <>
            <div className="PosterCard">
                <img className="PosterImage" src={src} alt="" />
                <div className="PosterText">
                    <h2 className="Text">{title}</h2>
                    <p className="Text">{year}</p>
                </div>
            </div>
        </>
    )
}