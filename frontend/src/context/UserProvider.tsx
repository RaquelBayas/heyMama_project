import { createContext, useState } from "react";

interface UserProviderProps{
    children: React.ReactNode;
}

interface UserContextType {
    user: User | null;
    logIn: (user: User) => void;
    logOut: () => void;
}

interface User {
    id: string;
    userType: 'user' | 'prof';
}

const UserContext = createContext<UserContextType | null>(null);

function userProvider ({children}: UserProviderProps){
    const [user, setUser] = useState<User | null>(null);
    
    function logIn (user: User){
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