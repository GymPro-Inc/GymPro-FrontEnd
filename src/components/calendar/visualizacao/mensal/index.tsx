import React, { useState } from 'react';
import { format, startOfMonth, subMonths, addMonths, eachWeekOfInterval, eachDayOfInterval, isSameMonth, isSameWeek, isToday } from 'date-fns';
import { pt } from 'date-fns/locale';
import './style.css';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

const Calendario: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const inicioDoMes = startOfMonth(currentDate);
    const finalDoMes = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const semanasDoMes = eachWeekOfInterval({ start: inicioDoMes, end: finalDoMes }, { weekStartsOn: 1 }).slice(0, 5);
    const mesDia = format(currentDate, 'MMMM, yyyy', { locale: pt });

    const retrocederMes = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const avancarMes = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const irParaDiaAtual = () => {
        setCurrentDate(new Date());
    };

    return (
        <div className="background-calendario">
            <div className="navegacao">
                <div className='localizacao'>
                <button onClick={retrocederMes}>
                    <CaretLeft size={42} />
                </button>
                <span className='diaMes'>{mesDia.charAt(0).toUpperCase() + mesDia.slice(1)}</span>
                <button onClick={avancarMes}>
                    <CaretRight size={42} />
                </button>
                </div>
                <div className='botao-hoje'>
                    <button onClick={irParaDiaAtual}>Hoje</button>
                </div>
            </div>
            <div className="calendario">
                <div className="semanas">
                    {semanasDoMes.map((semana, indiceSemana) => (
                        <div key={indiceSemana} className="semana">
                            {eachDayOfInterval({ start: semana, end: new Date(semana.getFullYear(), semana.getMonth(), semana.getDate() + 6) }).map((dia, indiceDia) => (
                                <div
                                    key={indiceDia}
                                    className={`dia ${isSameMonth(dia, currentDate) ? 'mes-atual' : 'outro-mes'} ${isSameWeek(dia, currentDate) ? 'semana-atual' : ''} ${isToday(dia) ? 'hoje' : ''}`}
                                >
                                    <span className="numero-do-dia">{format(dia, 'dd')}</span>
                                    <span className="dia-da-semana">{format(dia, 'EEEE', { locale: pt })}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendario;
