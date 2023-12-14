import { useState, createContext } from 'react';

const contextBase = createContext();

function pruebaContext({ children }) {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <contextBase.Provider value={{ isLogged, setIsLogged, pruebaContext }}>
            {children}
        </contextBase.Provider>
    );
}

export default pruebaContext;
export { contextBase };