import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState(null);

    const login = (email) => {
        setUserEmail(email);
    };

    const logout = () => {
        setUserEmail(null);
    };

    return (
        <AuthContext.Provider value={{ userEmail, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);