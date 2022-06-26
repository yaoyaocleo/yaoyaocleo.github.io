//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/

import React, { useState } from "react";

type GlobalContextType = {
    colorMode: string,
    setColorMode: (mode: string) => void
}
const GlobalContext = React.createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({children}: {children: React.ReactNode}) => {
    const [color, setColor] = useState('dark');

    console.log('GlobalContextProvider called');
    
    const setColorMode = (mode: string) => {
        setColor(mode);
    } 

    return (
        <GlobalContext.Provider value={{ colorMode: color, setColorMode }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalContextProvider };