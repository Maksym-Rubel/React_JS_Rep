import { useContext, useEffect, useState } from "react";
import { CounterContext } from '../contexts/counter.context';

export default function ToDoItem({ id, title, date, complete, important, removeFunction }) {

    // { state } allows component to automatically re-render when changed
    const [status, setStatus] = useState(complete);
    const { value, setValue } = useContext(CounterContext);

    
    function toggleStatus() {
        // complete = !complete;
        // status = !status;
        setStatus(!status);
        if(status == true)
        {
            setValue(value+1)
        }
        else
        {
            setValue(value - 1)
        }
        // alert("Statis: " + status)
    }

    return (
        <li onClick={toggleStatus} onDoubleClick={() => removeFunction(id)} className={status ? "done" : ""}>
            <input type="checkbox"  checked={status} />
            {important ? <span className="important">!</span> : ""}
            {title ?? "No title"}
            {date ? <span className="deadline">{date}</span> : ""}
            <button className="btn-del" onClick={() => removeFunction(id)}>Del</button>
        </li>
    );
}
