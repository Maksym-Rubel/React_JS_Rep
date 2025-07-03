import React from 'react'
import { useForm } from "react-hook-form"
import "./CreateGreate.css"

export default function CreateGreate({onCreate}) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            rating:1,
            title: "default",
            title2:"default",
            title3:"default",
        }
    });


    function onSubmit(task) {
        console.log("Task creating", task);
        onCreate(task);
    }
    function handleClick(rating) {
        for (let i = 1; i <= 5; i++) {
            if(i <= rating)
            {

            }
            else
            {

            }
            
        }

    }

    return (
        <>

            <form className="CreateTask" onSubmit={handleSubmit(onSubmit)}>
                <h2>Оцініть товар</h2>
                <div className='StarsSet'>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button key={num} onClick={() => handleClick(num)}>
                            ★
                        </button>
                    ))}
                </div>
                <label>
                    Переваги:

                    <input {...register("title")} type="text" name="title" />
                </label>
                <label>
                    Недоліки:

                    <input {...register("title")} type="text" name="title" />
                </label>
                <label className="FullLabble">
                    Коментар:
                    <textarea {...register("title")} name="title" />
                </label>

                <button type='submit'>Create</button>
            </form>
        </>
    )
}
