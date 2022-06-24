import React from "react";

const context = {
    user: null
}
const TheContext = React.createContext(context);

export { TheContext };