import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Api from '../../infra/api';
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from '../../hooks/useAuth';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';


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
                toast.success("Login relizado com sucesso!")
            }

            await handleSaveUserLogged(data);

        } catch (error: any) {
            if (error.response) {
                toast.error(`${error.response.data}`);
            } else {
                toast.error("Erro ao realizar login!");
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
                    <input autoComplete='false' required type="email" placeholder="E-mail:" onChange={(event) => {
                        if (event) {
                            setEmail(event.target.value);
                        }
                    }} />
                </label>
                <label className="imputBox">
                    <input autoComplete='false' required type="password" placeholder="Senha:" onChange={(event) => {
                        if (event) {
                            setSenha(event.target.value);
                        }
                    }} />
                </label>
                <label className="login-buttons">
                    <input type="submit" value="Entrar" />
                    <div style={{ display: "flex" }}>
                        <GoogleLogin
                            shape='circle'
                            type='icon'
                            onSuccess={async credentialResponse => {
                                const token = credentialResponse.credential?.toString(),
                                    decoded: any = await jwtDecode(token!);

                                const dto = {
                                    email: decoded.email,
                                    senha: decoded.sub,
                                    nome: decoded.name,
                                    origem: 1,
                                    role: "USER"
                                }

                                try {
                                    const { data } = await Api.post('/auth/loginexterno', dto);

                                    if (data) {
                                        toast.success("Login relizado com sucesso!")
                                    }

                                    await handleSaveUserLogged(data);

                                } catch (error: any) {
                                    if (error.response) {
                                        toast.error(`${error.response.data}`);
                                    } else {
                                        toast.error("Erro ao realizar login!");
                                    }
                                }

                            }}
                            onError={() => {
                                toast.error("Erro ao realizar login!");
                            }}
                        />
                    </div>
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