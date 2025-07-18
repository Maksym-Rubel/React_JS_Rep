import { createContext, useState } from "react";

const initialState = {
    value: 0,
    setValue: () => {},
    Current_Song_Playlist: [{
      title: "def",
      artist: "def def",
      src: "/public/songs/def-def-def.mp3",
      cover: "/public/imgs/def.jpg"
    }],
    setCount: () => {},
    Current_ID:0,
    setCurrent_ID:() =>{},
    gradientstrmenu:"linear-gradient(180deg, #181818f5, #181818d4)",
    setGradientstrMenu:() => {}
};

export const CounterContext = createContext(initialState);

export const CounterProvider = ({ children }) => {
    const [value, setValue] = useState(initialState.value);
    const [Current_Song_Playlist, setCurrent_Song_Playlist] = useState(initialState.Current_Song_Playlist);
    const [Current_ID, setCurrent_ID] = useState(initialState.Current_ID);
    const [gradientstrmenu, setGradientstrMenu] = useState(initialState.gradientstrmenu);



    return (
        <CounterContext.Provider value={{ value, setValue,Current_Song_Playlist,setCurrent_Song_Playlist,Current_ID, setCurrent_ID,gradientstrmenu, setGradientstrMenu}}>
            {children}
        </CounterContext.Provider>
    );
}