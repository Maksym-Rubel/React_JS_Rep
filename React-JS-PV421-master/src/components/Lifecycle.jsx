import React, { useEffect, useState } from 'react'

export default function Lifecycle() {

    const [day, setDay] = useState("Friday");
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        console.log("Component did mount or update with any dependency change");
    });

    useEffect(() => {
        console.log("Component updated with day value");
    }, [day]);

    useEffect(() => {
        return () => {
            console.log("Component will unmount");
        };
    }, []);

    useEffect(() => {
        console.log("Component did mount");
    }, []);

    return (
        <>
            <h2>Lifecycle example</h2>
            {flag ? <p>Flag is true</p> : <p>Flag is false</p>}
            <p>Today is {day}</p>
            <button onClick={() => setDay(day + '!')}>Set Day to Monday</button>
            <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
        </>
    )
}
