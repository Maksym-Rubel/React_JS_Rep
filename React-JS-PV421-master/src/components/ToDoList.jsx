import { useContext, useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import CreateTask from "./CreateTask";
import { CounterContext } from '../contexts/counter.context';
import { CounterImportant } from '../contexts/counter.importante.jsx';

export default function ToDoList({ tasksList }) {

    const [list, setList] = useState(tasksList);

    const { value, setValue } = useContext(CounterContext);
    const { value1, setValue1 } = useContext(CounterImportant);


    function removeItem(id) {
        // list = list.filter(i => i.id !== id);
        setList(list.filter(i => i.id !== id));
        if (list[id].important) {
            setValue1(value1 - 1)
        }
        if(!list[id].checked)
        {
             setValue(value - 1)
        }
        if(list[id].checked)
        {
            setValue(value + 0)
        }
    }
    function createItem(task) {
        // generate new ID
        const newId = list.length > 0 ? Math.max(...list.map(i => i.id)) + 1 : 1;
        // add new task with new ID
        task.id = newId;
        setList([...list, task]);
    }

    return (
        <>
            {
                list.length === 0 ?
                    <p>No tasks!</p>
                    :
                    <ul className="todo_list">
                        {list.map(task => <ToDoItem key={task.id} {...task} removeFunction={removeItem} />)}
                    </ul>
            }
            <CreateTask onCreate={createItem} />
        </>
    );
}
