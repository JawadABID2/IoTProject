import React, {createContext, useState} from "react";
const Contexte = createContext();

export function ContextePorvider({children}){
    const [maskSidebar, setMaskSidebar] = useState(true);
    const [currentContext, SetCurrentContext] = useState('dashboard');
    return(
        <Contexte.Provider value={{maskSidebar, setMaskSidebar, currentContext, SetCurrentContext}}>
            {children}
        </Contexte.Provider>
    )
}
export default Contexte;

// context: user, context
