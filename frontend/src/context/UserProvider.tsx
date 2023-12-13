import { createContext, useState, ReactNode } from "react";

interface UserProviderProps{
    children: React.ReactNode;
}

const UserContext = createContext();

function userProvider ({children}: UserProviderProps){
    const [user, setUser] = useState(null);
    
    function logIn (user){
        setUser(user);
    }

    function logOut(){
        setUser(null);
        localStorage.removeItem('token');
    }

    return(
        <UserContext.Provider
            value={{
                user,
                logIn,
                logOut
            }}    
        >
            {children}
        </UserContext.Provider>
    )
}

export default userProvider;
export { UserContext }