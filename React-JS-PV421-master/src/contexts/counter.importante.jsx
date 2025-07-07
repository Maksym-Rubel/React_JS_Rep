import { createContext, useState } from "react";

const initialState = {
    value1: 0,
    setValue1: () => { }
};

export const CounterImportant = createContext(initialState);

export const CounterImportantProvider = ({ children }) => {
    const [value1, setValue1] = useState(initialState.value1);

    return (
        <CounterImportant.Provider value={{ value1, setValue1 }}>
            {children}
        </CounterImportant.Provider>
    );
}