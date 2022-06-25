import React, { useState } from "react";

// type GlobalContextType = {
//     theme: string | null,
//     setTheme: (theme: string) => void
// }

const GlobalContext = React.createContext({});

type GlobalContextProviderType = {
    children: React.ReactNode
}

const GlobalContextProvider = ({children}: GlobalContextProviderType) => {
    const [globalTheme, setGlobalTheme] = useState('');

    const setTheme = (theme: string) => {
        console.log(`theme = ${theme}`);
        setGlobalTheme(theme);
    }

    return (
        <GlobalContext.Provider value={{ theme: globalTheme, setTheme }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalContextProvider };