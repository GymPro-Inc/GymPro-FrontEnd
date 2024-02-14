import { Route, Routes,} from "react-router-dom";
import Perfil from "../components/screen/perfil/perfil";

export function Rotas() {
    return (
        <Routes>
            {/* <Route Component={Home} path="/" /> */}
            <Route Component={Perfil} path="/perfil" />
            {/* <Route Component={Treinos} path="/treinos" />
            <Route Component={Clientes} path="/clientes" />
            <Route Component={Financeiro} path="/financeiro" />
            <Route Component={Configuracoes} path="/configuracoes" />
            <Route Component={Sair} path="/sair" /> */}
        </Routes>
    )
}
