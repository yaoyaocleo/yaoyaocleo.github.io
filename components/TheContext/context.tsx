import React, { useEffect, useState } from "react";

type contextType = {
    user: string | null,
    setUserName: (name: string) => void
}

const contextInit: contextType = {
    user: null,
    setUserName: (name) => {}
}

const TheContext = React.createContext(contextInit);

type theContextProviderType = {
    children: React.ReactNode
}

const TheContextProvider = ({children}: theContextProviderType) => {
    const [name, setName] = useState('');

    const setUserName = (name: string) => {
        console.log(`name = ${name}`);
        setName(name);
    }

    return (
        <TheContext.Provider value={{ user: name, setUserName }}>
            {children}
        </TheContext.Provider>
    );
}

export { TheContext, TheContextProvider };