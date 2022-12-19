import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) =>
{
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
    
    return (
        <AuthContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn, role, setRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;