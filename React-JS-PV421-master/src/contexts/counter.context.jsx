import { createContext, useState } from "react";

const initialState = {
    value: 0,
    setValue: () => { }
};

export const CounterContext = createContext(initialState);

export const CounterProvider = ({ children }) => {
    const [value, setValue] = useState(initialState.value);

    return (
        <CounterContext.Provider value={{ value, setValue }}>
            {children}
        </CounterContext.Provider>
    );
}