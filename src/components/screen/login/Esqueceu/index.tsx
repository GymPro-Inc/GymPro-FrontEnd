import React from 'react';

interface Props {
    isVisivel: boolean;
}

const Esqueceu = ({isVisivel} : Props) => {
    return (
        <div>
            {isVisivel && <div className="login-container">
                <i></i>
                <i></i>
                <i></i>
                <form className='login'>
                    <h2>Criar Conta</h2>
                    <label className="imputBox">
                        <input type="text" placeholder="Nome:" required />
                    </label>
                    <label className="imputBox">
                        <input type="text" placeholder="Usuário:" required />
                    </label>
                    <label className="imputBox">
                        <input type="password" placeholder="Senha:" required />
                    </label>
                    <label className="imputBox">
                        <input type="submit" value="Criar" />
                    </label>
                </form>
            </div>}
        </div>
    );
};

export default Esqueceu;