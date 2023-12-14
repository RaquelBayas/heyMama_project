import { createContext, useEffect, useState } from "react";

interface UserProviderProps {
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
    exp: number;
}

const UserContext = createContext<UserContextType | null>(null);

function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<Promise<User | null>>(async () => {
        const token = localStorage.getItem('token');
        if (!token) return;
        const resp = await fetch('http://localhost:5000/users/initialLogin', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await resp.json();

        return data.user;

    });



    function logIn(user: User) {
        setUser(user);
    }

    function logOut() {
        setUser(null);
        localStorage.removeItem('token');
    }

    return (
        <UserContext.Provider value={{ user, logIn, logOut }} >
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
export { UserContext };