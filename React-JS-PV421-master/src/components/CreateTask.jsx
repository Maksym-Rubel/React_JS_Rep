import { useForm } from 'react-hook-form';
import { CounterImportant } from '../contexts/counter.importante.jsx';
import { useContext } from 'react';

export default function CreateTask({ onCreate }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: "Visit the doctor",
            date: new Date().toISOString().split('T')[0], // Format date as YYYY-MM-DD
            important: false,
        }
    });
    const { value1, setValue1 } = useContext(CounterImportant);

    function onSubmit(task) {
        console.log("Task creating", task);
        // create new task logic here?
        onCreate(task);
        if(task.important)
        {
            setValue1(value1 + 1);
        }
    }

    return (
        <>
            <h2>Create Task</h2>
            <form className="CreateTask" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Title:
                    <input {...register("title", { required: true, minLength: 5 })} type="text" name="title" />
                </label>
                <label>
                    Date:
                    <input {...register("date")} type="date" name="date" />
                </label>
                <label>
                    Important:
                    <input {...register("important")} type="checkbox" name="important" />
                </label>
                <button type='submit'>Create</button>
            </form>
        </>
    )
}
