import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';


const Login = () => {


    return (
        <div className="login-container">
            <i></i>
            <i></i>
            <i></i>
            <form className='login'>
                <h2>Login</h2>
                <label className="imputBox">
                    <input type="text" placeholder="Usuário:" required />
                </label>
                <label className="imputBox">
                    <input type="password" placeholder="Senha:" required />
                </label>
                <label className="imputBox">
                    <input type="submit" value="Entrar" />
                </label>
                <label className="links">
                    <Link to='esqueceu'>
                    <a>Esqueceu a senha?</a>
                    </Link>
                    <Link to='criar'>
                    <a>Criar conta</a>
                    </Link>
                    
                </label>
            </form>
        </div>
    );
}

export default Login;