import React from 'react';
import './style.css';
import BackgroundFlutuante from '../../../BackgroundFlutuante/BackgroundFlutuante';
import { CaretLeft } from '@phosphor-icons/react';
import Accordion from '../../../acordeon/Accordion';
import { Link, useNavigate } from 'react-router-dom';

const Criar = () => {

    return (
        <div className="criar-container">
            <BackgroundFlutuante cor='#fff' />
            <div className='form-container'>
                <div className='header'>
                    <Link to='/' className='voltar'>
                        <CaretLeft size={40} weight="fill" />
                    </Link>
                    <h1>Criar Conta</h1>
                </div>
                <form>
                    <div className='colunas'>
                        <div className='campoTexto'>
                            <label>NOME</label>
                            <input type="text" placeholder="Nome completo" />
                        </div>
                        <div className='campoTexto'>
                            <label>EMAIL</label>
                            <input type="email" placeholder="email@exemplo.com" />
                        </div>
                    </div>
                    <div className='colunas'>
                        <div className='campoTexto'>
                            <label>SENHA</label>
                            <input type="password" placeholder="Sua senha" />
                        </div>
                        <div className='campoTexto'>
                            <label>CONFIRMAR SENHA</label>
                            <input type="password" placeholder="Confirmar Senha" />
                        </div>
                    </div>
                    <button className='criar-conta' type="submit">Criar conta</button>
                </form>
            </div>
        </div>
    );
};

export default Criar;