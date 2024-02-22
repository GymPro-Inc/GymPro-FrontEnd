import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Api from '../../infra/api';
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from '../../hooks/useAuth';


const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const { handleSaveUserLogged } = useAuth()
    const logar = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dto = {
            email,
            senha
        }

        try {
            const { data } = await Api.post('/auth/login', dto);

            if (data) {
                toast.success("Login relizado com sucesso!", {
                    position: "top-center",
                    theme: "dark"
                });
            }

            await handleSaveUserLogged(data);

        } catch (error: any) {
            if (error.response) {
                toast.error(`${error.response.data}`, {
                    position: "top-center",
                    theme: "dark"
                });
            } else {
                toast.error("Erro ao realizar login!", {
                    position: "top-center",
                    theme: "dark"
                });
            }
        }
    }


    return (
        <div className="login-container">
            <i></i>
            <i></i>
            <i></i>
            <form className='login' onSubmit={logar}>
                <h2>Login</h2>
                <label className="imputBox" >
                    <input required type="email" placeholder="E-mail:" onChange={(event) => {
                        if (event) {
                            setEmail(event.target.value);
                        }
                    }} />
                </label>
                <label className="imputBox">
                    <input required type="password" placeholder="Senha:" onChange={(event) => {
                        if (event) {
                            setSenha(event.target.value);
                        }
                    }} />
                </label>
                <label className="imputBox">
                    <input type="submit" value="Entrar" />
                </label>
                <label className="links">
                    <Link to='esqueceu'>
                        <label style={{ cursor: "pointer" }}>Esqueceu a senha?</label>
                    </Link>
                    <Link to='criar'>
                        <label style={{ cursor: "pointer" }}>Criar conta</label>
                    </Link>
                </label>
            </form>
        </div>
    );
}

export default Login;