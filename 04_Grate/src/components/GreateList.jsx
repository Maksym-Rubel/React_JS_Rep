import React, { useState } from 'react'
import GrateForm from './GrateForm';
import CreateGreate from './CreateGreate';
import "./CreateGreate.css"
export default function GreateList({ tasksList }) {
    const [list, setList] = useState(tasksList);
    function createItem(task) {
        // generate new ID
        const newId = list.length > 0 ? Math.max(...list.map(i => i.id)) + 1 : 1;
        // add new task with new ID
        task.id = newId;
        setList([...list, task]);
    }
    return (
        <>
            <div className='top'>
                {
                    list.map(task => <GrateForm key={task.id} {...task} />)
                }
            </div>

            <CreateGreate onCreate={createItem} />
        </>

    )
}
