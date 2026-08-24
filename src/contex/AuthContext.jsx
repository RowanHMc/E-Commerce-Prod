import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const isLoggedIn = Boolean(user);
    return(
        <AuthContext.Provider value ={{user, isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth =() => useContext(AuthContext);