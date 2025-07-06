import React, { useState } from 'react'
import Create from './Create';
import "../App.css"
import Card from './Card';

export default function CardList({ tasklist }) {

    const [list, setList] = useState(tasklist);



    function createItem(task) {
        setList([...list, task]);
    }
    return (
        <>
        <div className="wrapper">
            <div className='CardsMap'>
                {list.map((i) => (
                    <Card
                        {...i}
                    />
                ))}
            </div>
        </div>
        <Create onCreate={createItem} />
        </>
    )
}
