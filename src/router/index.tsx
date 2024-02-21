import { Route, Routes, } from "react-router-dom";
import Criar from "../components/screen/login/Criar";
import Login from "../components/screen/login/login";

export function Rotas() {
    return (
        <Routes>
            <Route Component={Login} path="/" />
            {/* <Route Component={} path="/esqueceu" />
            <Route Component={Perfil} path="/perfil" />
            <Route Component={Treinos} path="/treinos" />
            <Route Component={Armarios} path="/armarios" />
            <Route Component={Clientes} path="/clientes" />
            <Route Component={Financeiro} path="/financeiro" />
            <Route Component={Configuracoes} path="/configuracoes" />
            <Route Component={Sair} path="/sair" /> */}
            <Route Component={Criar} path="/criar" />
        </Routes>
    )
}
