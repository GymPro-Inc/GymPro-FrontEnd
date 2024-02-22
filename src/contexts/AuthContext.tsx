import { createContext, useEffect, useState } from "react";
import Api from "../infra/api";
import App from "../App";

interface UserLogged {
    token: string;
}

interface AuthContextProps {
    userLogged?: UserLogged;
    handleSaveUserLogged: (userLogged?: UserLogged) => Promise<void>;
    handleGetUserLoggedFromStorageData: () => Promise<void>;

}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: any) {

    const [userLogged, setUserLogged] = useState<UserLogged | undefined>(undefined);

    async function handleGetUserLoggedFromStorageData() {
        const userLogged = localStorage.getItem('@userLogged'),
            userLoggedParsed = JSON.parse(userLogged == null || userLogged == 'undefined' ? '{}' : userLogged);

        if (userLoggedParsed?.token) Api.defaults.headers['Authorization'] = `Bearer ${userLoggedParsed?.token}`
        setUserLogged(userLoggedParsed);
    }

    async function handleSaveUserLogged(userLogged?: UserLogged) {
        setUserLogged(userLogged);
        localStorage.setItem('@userLogged', JSON.stringify(userLogged));
    }

    return (
        <AuthContext.Provider value={{
            userLogged,
            handleSaveUserLogged,
            handleGetUserLoggedFromStorageData
        }}>
            {children}
        </AuthContext.Provider>
    )
}