import React from 'react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import Draggable from 'react-draggable';
import './evento.css';
import { X } from '@phosphor-icons/react';

interface EventoProps {
    date: any;
    onClose: () => void;
}

const Evento = ({ date, onClose }: EventoProps) => {
    return (
        <Draggable handle=".barra">
            <div className="modalEvento">
                <div className="barra">
                    <X className="botao-fechar" onClick={onClose} />
                </div>
                <div className="conteudo">
                    <div className="formulario">
                        <div className='campoTexto'>
                            <label>Titulo: </label>
                            <input required type="text" placeholder="email@exemplo.com" onChange={(event) => {
                                if (event) {
                                    // setEmail(event.target.value);
                                }
                            }} />
                        </div>
                        <div className='campoTexto'>
                            <label>Titulo: </label>
                            <input required type="text" placeholder="email@exemplo.com" onChange={(event) => {
                                if (event) {
                                    // setEmail(event.target.value);
                                }
                            }} />
                        </div>
                        <div className='campoTexto'>
                            <label>Titulo: </label>
                            <input required type="text" placeholder="email@exemplo.com" onChange={(event) => {
                                if (event) {
                                    // setEmail(event.target.value);
                                }
                            }} />
                        </div>
                        <div className='campoTexto'>
                            <label>Titulo: </label>
                            <input required type="text" placeholder="email@exemplo.com" onChange={(event) => {
                                if (event) {
                                    // setEmail(event.target.value);
                                }
                            }} />
                        </div>
                        <div className='campoTexto'>
                            <label>Titulo: </label>
                            <input required type="text" placeholder="email@exemplo.com" onChange={(event) => {
                                if (event) {
                                    // setEmail(event.target.value);
                                }
                            }} />
                            
                        </div>
                    </div>
                    <div className="eventos">
                    </div>
                </div>
            </div>
        </Draggable >
    );
}

export default Evento;