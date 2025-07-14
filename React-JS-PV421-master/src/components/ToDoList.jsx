import { useContext, useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import CreateTask from "./CreateTask";
import { CounterContext } from '../contexts/counter.context';
import { CounterImportant } from '../contexts/counter.importante.jsx';

export default function ToDoList() {

    const [list, setList] = useState([]);
    const [limit, setLimit] = useState(5);
    const { value, setValue } = useContext(CounterContext);
    const { value1, setValue1 } = useContext(CounterImportant);

    useEffect(() => {
        fetch(`https://dummyjson.com/todos?limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                const formatted = data.todos.map(todo => ({
                    ...todo,
                    important: Math.random() > 0.7
                }));
                setList(formatted);
                setValue(formatted.filter(t => !t.completed).length);
                setValue1(formatted.filter(t => t.important).length);
            });
    }, []);
    useEffect(() => {
        fetch(`https://dummyjson.com/todos?limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                const formatted = data.todos.map(todo => ({
                    ...todo,
                    important: Math.random() > 0.7
                }));
                setList(formatted);
                setValue(formatted.filter(t => !t.completed).length);
                setValue1(formatted.filter(t => t.important).length);
            });
    }, [limit]);

    function ChangeLimit() {
        setLimit(limit + 5);
    }
    function ChangeLimit1() {
        if (limit >= 10) {
            setLimit(limit - 5);
        }
    }
    function removeItem(id) {

        setList(list.filter(i => i.id !== id));
        if (list[id].important) {
            setValue1(value1 - 1)
        }
        if (!list[id].checked) {
            setValue(value - 1)
        }
        if (list[id].checked) {
            setValue(value + 0)
        }
    }
    function createItem(task) {

        const newId = list.length > 0 ? Math.max(...list.map(i => i.id)) + 1 : 1;

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
            <div className="BtnDiv">
                <button className="PgnationBtn" onClick={ChangeLimit1}>Prev Page</button>
                <button className="PgnationBtn" onClick={ChangeLimit}>Next Page</button>

            </div>
            <CreateTask onCreate={createItem} />
        </>
    );
}
