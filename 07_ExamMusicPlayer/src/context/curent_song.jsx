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
    setCount: () => {}
};

export const CounterContext = createContext(initialState);

export const CounterProvider = ({ children }) => {
    const [value, setValue] = useState(initialState.value);
    const [Current_Song_Playlist, setCurrent_Song_Playlist] = useState(initialState.Current_Song_Playlist);

    return (
        <CounterContext.Provider value={{ value, setValue,Current_Song_Playlist,setCurrent_Song_Playlist }}>
            {children}
        </CounterContext.Provider>
    );
}