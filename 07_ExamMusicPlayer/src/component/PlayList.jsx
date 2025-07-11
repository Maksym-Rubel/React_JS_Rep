import React, { useEffect, useState } from 'react'
import "./PlayList.css"
import PlayListObj from './PlayListObj';
export default function PlayList({ playlist }) {
    const [PlayListAudio, setPlayListAudio] = useState(playlist);
    const [id, setId] = useState(0);
    function getId() {

        setId(id + 1);
        return id;
    }
    useEffect(() => {
        setPlayListAudio(playlist);
    }, [playlist]);
    return (
        <div className='PlayList1'>
            {
                PlayListAudio.map((i, index) => <PlayListObj key={index} {...i} id={index}></PlayListObj>)
            }

        </div>
    )
}
