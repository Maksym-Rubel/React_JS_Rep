import { useState } from "react";
import Card from './Card.jsx'
import './Card.css'

export default function MovieCards({ movieList }) {

    const [list, setList] = useState(movieList);

    function ChangeRating(id) {
        const updatedList = list.map(movie => {
            if (movie.id == id && movie.rating >= 5) {
                return{...movie, rating:1}
            }
            else if (movie.id == id) {
                return{...movie, rating:movie.rating + 1}
            }
            return movie;
        });

        setList(updatedList);

    }
    return (

        <>
            <div className="MovieRow">
                {list.map(task => <Card {...task} ChangeRating={ChangeRating} />)}
            </div>
        </>
    );
}