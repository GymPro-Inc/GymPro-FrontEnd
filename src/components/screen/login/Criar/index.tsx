import React, { useState } from 'react';
import './style.css';
import BackgroundFlutuante from '../../../BackgroundFlutuante/BackgroundFlutuante';
import { CaretLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import axiosDefault from '../../../../infra/api';

const Criar = () => {
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [confirmarSenha, setConfirmarSenha] = useState<string>("");

    const validarSenha = async () => {
        if (senha !== confirmarSenha) return alert("As senhas não coincidem");
    }

    const criarConta = async () => {
        console.log(nome, email, senha, confirmarSenha);

        await validarSenha();

        const data = {
            nome,
            email,
            senha
        }

        const response = await axiosDefault.post('/criarconta', JSON.stringify(data))

        if (response.status !== 200) return alert("Erro ao criar conta");

        
    }

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
                <div>
                    <div className='colunas'>
                        <div className='campoTexto'>
                            <label>NOME</label>
                            <input required type="text" placeholder="Nome completo" onChange={(event) => {
                                if (event) {
                                    setNome(event.target.value);
                                }
                            }} />
                        </div>
                        <div className='campoTexto'>
                            <label>EMAIL</label>
                            <input required type="email" placeholder="email@exemplo.com" onChange={(event) => {
                                if (event) {
                                    setEmail(event.target.value);
                                }
                            }} />
                        </div>
                    </div>
                    <div className='colunas'>
                        <div className='campoTexto'>
                            <label>SENHA</label>
                            <input required type="password" placeholder="Sua senha" onChange={
                                (event) => {
                                    if (event) {
                                        setSenha(event.target.value);
                                    }
                                }

                            } />
                        </div>
                        <div className='campoTexto'>
                            <label>CONFIRMAR SENHA</label>
                            <input required type="password" placeholder="Confirmar Senha" onChange={
                                (event) => {
                                    if (event) {
                                        setConfirmarSenha(event.target.value);
                                    }
                                }

                            } />
                        </div>
                    </div>
                    <button onClick={criarConta} type='submit' className='criar-conta'>Criar conta</button>
                </div>
            </div>
        </div>
    );
};

export default Criar;