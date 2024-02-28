import React from 'react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import Draggable from 'react-draggable';
import './evento.css';
import { X } from '@phosphor-icons/react';

interface EventoProps {
    date: Date;
    onClose: () => void;
}

const Evento = ({ date, onClose } : EventoProps) => {
    return (
        <Draggable handle=".barra">
            <div className="modalEvento">
                <div className="barra">
                    <X className="botao-fechar" onClick={onClose}/>
                </div>
                <div className="conteudo">
                    <h1>Evento em {format(date, 'dd/MM/yyyy', { locale: pt })}</h1>
                </div>
            </div>
        </Draggable >
    );
}

export default Evento;