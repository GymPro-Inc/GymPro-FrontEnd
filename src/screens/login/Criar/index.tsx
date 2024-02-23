import React, { useState } from 'react';
import './style.css';
import BackgroundFlutuante from '../../../components/BackgroundFlutuante/BackgroundFlutuante';
import { CaretLeft } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../../../infra/api';
import { toast } from 'react-toastify';

const Criar = () => {
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [confirmarSenha, setConfirmarSenha] = useState<string>("");

    const navigate = useNavigate();

    const criarConta = (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            if (senha !== confirmarSenha) return toast.error("As senhas não coincidem");

            const dto = {
                nome,
                email,
                senha,
                role: "USER",
                origem: "1"
            }

            toast.promise(
                Api.post('/auth/register', dto), {
                pending: 'Criando conta...',
                success: 'Conta criada com sucesso!',
                error: 'Erro ao criar conta'
            }).then(() => {
                navigate('/');
            });
        } catch (error) {
        }
    }

    return (
        <div className="criar-container">
            <BackgroundFlutuante cor='#fff' />
            <form className='form-container' onSubmit={criarConta}>
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
                    <button type='submit' className='criar-conta'>Criar conta</button>
                </div>
            </form>
        </div>

    );

};

export default Criar;