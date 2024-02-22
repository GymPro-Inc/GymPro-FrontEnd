import { Route, Routes, } from "react-router-dom";
import Criar from "../screens/login/Criar";
import Login from "../screens/login/login";
import { ToastContainer, Zoom } from "react-toastify";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import BackgroundFlutuante from "../components/BackgroundFlutuante/BackgroundFlutuante";
import MenuSlider from "../components/menuSlider/menuSlider";
import TopBar from "../components/topBar/TopBar";
import "./style.css";
import LoadingScreen from "../screens/loading/Loading";
import { Pagina } from "../components/page";

export function Rotas() {

    const { userLogged, handleGetUserLoggedFromStorageData } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        handleLoadStorageData()
    }, [])

    async function handleLoadStorageData() {
        setIsLoading(true);
        setTimeout(() => {
            handleGetUserLoggedFromStorageData().finally(() => setIsLoading(false))
        }, 300)
    }

    return (
        <>
            {
                userLogged?.token &&
                <Pagina>


                </Pagina>
            }
            <Routes>
                {
                    isLoading &&
                    <Route Component={LoadingScreen} path="*" />
                }
                {
                    !userLogged?.token &&
                    <Route Component={Login} path="*" />
                }
                <Route Component={Criar} path="/criar" />
                {/* <Route Component={} path="/esqueceu" />
            <Route Component={Perfil} path="/perfil" />
            <Route Component={Treinos} path="/treinos" />
            <Route Component={Armarios} path="/armarios" />
            <Route Component={Clientes} path="/clientes" />
            <Route Component={Financeiro} path="/financeiro" />
            <Route Component={Configuracoes} path="/configuracoes" />
            <Route Component={Sair} path="/sair" /> */}
            </Routes>
        </>
    )
}
