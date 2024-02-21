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
                    <label style={{cursor: "pointer"}}>Esqueceu a senha?</label>
                    </Link>
                    <Link to='criar'>
                    <label style={{cursor: "pointer"}}>Criar conta</label>
                    </Link>
                </label>
            </form>
        </div>
    );
}

export default Login;