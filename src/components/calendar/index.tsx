import React, { useState } from 'react';
import { format, startOfMonth, subMonths, addMonths, eachWeekOfInterval, addWeeks, addDays, subWeeks, subDays, } from 'date-fns';
import { pt } from 'date-fns/locale';
import './visualizacao.css';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import Mensal from './visualizacao/mensal';
import Semanal from './visualizacao/semanal';

type Visualizacao = 'mensal' | 'semanal' | 'diario';

const Calendario: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [vizualizacao, setVizualizacao] = useState<Visualizacao>('mensal');

    const inicioDoMes = startOfMonth(currentDate);
    const finalDoMes = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const semanasDoMes = eachWeekOfInterval({ start: inicioDoMes, end: finalDoMes }, { weekStartsOn: 1 }).slice(0, 5);
    const mesDia = vizualizacao==='diario' ? format(currentDate, 'dd, MMMM, yyyy', { locale: pt }) : format(currentDate, 'MMMM, yyyy', { locale: pt });

    const retroceder = () => {
        if(vizualizacao==='mensal') setCurrentDate(subMonths(currentDate, 1));
        if(vizualizacao==='semanal') setCurrentDate(subWeeks(currentDate, 1));
        if(vizualizacao==='diario') setCurrentDate(subDays(currentDate, 1));
    };

    const avancar = () => {
        if(vizualizacao==='mensal') setCurrentDate(addMonths(currentDate, 1));
        if(vizualizacao==='semanal') setCurrentDate(addWeeks(currentDate, 1));
        if(vizualizacao==='diario') setCurrentDate(addDays(currentDate, 1));
    };

    const irParaDiaAtual = () => {
        setCurrentDate(new Date());
    };

    const mudarVisualizacao = (novaVizualizacao: Visualizacao) => {
        setVizualizacao(novaVizualizacao)
    }

    return (
        <div className="background-calendario">
            <div className='header'>
                <div className="navegacao">
                    <div className='localizacao'>
                        <button onClick={retroceder}>
                            <CaretLeft size={42} />
                        </button>
                        <span className='diaMes'>{mesDia.charAt(0).toUpperCase() + mesDia.slice(1)}</span>
                        <button onClick={avancar}>
                            <CaretRight size={42} />
                        </button>
                    </div>
                    <div className='botao-hoje'>
                        <button onClick={irParaDiaAtual}>Hoje</button>
                    </div>
                </div>
                <div className='visualizacao'>
                    <button onClick={() => mudarVisualizacao('mensal')}>Mensal</button>
                    <button onClick={() => mudarVisualizacao('semanal')}>Semanal</button>
                    <button onClick={() => mudarVisualizacao('diario')}>Diário</button>
                </div>
            </div>
            {vizualizacao === 'mensal' && Mensal(semanasDoMes, currentDate)}
            {vizualizacao === 'semanal' && Semanal(currentDate)}
            {/* {vizualizacao === 'diario' && Diario()} */}
        </div>
    );
};

export default Calendario;
