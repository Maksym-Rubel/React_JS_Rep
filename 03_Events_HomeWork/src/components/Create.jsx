import React from 'react'
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';

export default function Create({ onCreate }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            id: 1,
            imgsrc: "https://fenixcentr.dp.ua/image/cache/catalog/articles/132307232-1000x1000.jpg",
            title: "Кувалда Juco Традиція 5 кг (М2117)",
            rating: 4.5,
            quantity: 10,
            price: 299,
            favorite: false,
            koshyk: false,
            sale: 10
        }
    });


    function onSubmit(task) {
        console.log("Task creating", task);
        onCreate(task);
    }

    return (
        <>
            <h2>Create Task</h2>
            <form className="CreateTask" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Image source:
                    <input {...register("imgsrc")} type="text" name="imgsrc" />
                </label>
                <label>
                    Title:
                    <input {...register("title", { required: true, minLength: 5 })} type="text" name="title" />
                </label>
                <label>
                    Rating:
                    <input {...register("rating")} type="text" name="rating" />
                </label>
                <label>
                    Quantity:
                    <input {...register("quantity")} type="text" name="quantity" />
                </label>
                <label>
                    Price:
                    <input {...register("price")} type="text" name="price" />
                </label>
                <label>
                    Sale:
                    <input {...register("sale")} type="text" name="sale" />
                </label>
                <button type='submit'>Create</button>
            </form>
        </>
    )
}
