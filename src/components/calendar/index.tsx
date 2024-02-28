import React, { useEffect, useRef, useState } from 'react';
import { format, startOfMonth, subMonths, addMonths, eachWeekOfInterval, addWeeks, addDays, subWeeks, subDays, eachDayOfInterval } from 'date-fns';
import { pt } from 'date-fns/locale';
import './visualizacao.css';
import { CaretLeft, CaretRight, Funnel } from '@phosphor-icons/react';
import Mensal from './visualizacao/mensal';
import Semanal from './visualizacao/semanal';
import Diario from './visualizacao/diario';
import InputMask from 'react-input-mask';

type Visualizacao = 'mensal' | 'semanal' | 'diario';

const Calendario: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date()),
        [vizualizacao, setVizualizacao] = useState<Visualizacao>('mensal'),
        [startHour, setStartHour] = useState('08:00'),
        [endHour, setEndHour] = useState('22:00'),
        [dateRange, setDateRange] = useState<Date[]>([]),
        [onHoverFilter, setOnHoverFilter] = useState(false),
        inicioDoMes = startOfMonth(currentDate),
        finalDoMes = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0),
        semanasDoMes = eachWeekOfInterval({ start: inicioDoMes, end: finalDoMes }, { weekStartsOn: 1 }).slice(0, 5),
        mesDia = vizualizacao === 'diario' ? format(currentDate, 'dd, MMMM, yyyy', { locale: pt }) : format(currentDate, 'MMMM, yyyy', { locale: pt }),
        filterRef = useRef(null),
        filter = useRef(null);

    const handleStartHourChange = (event: any) => {
        setStartHour(event.target.value);
    };

    const handleEndHourChange = (event: any) => {
        setEndHour(event.target.value);
    };

    useEffect(() => {
        setDateRange(gerarPeriodo());
    }, [startHour, endHour]);

    const gerarPeriodo = () => {
        const start = new Date(`2022-01-01T${startHour}`);
        const end = new Date(`2022-01-01T${endHour}`);
        const dateRange = [];

        while (start <= end) {
            dateRange.push(new Date(start));
            start.setTime(start.getTime() + 60 * 60 * 1000);
        }

        return dateRange;
    };

    const retroceder = () => {
        if (vizualizacao === 'mensal') setCurrentDate(subMonths(currentDate, 1));
        if (vizualizacao === 'semanal') setCurrentDate(subWeeks(currentDate, 1));
        if (vizualizacao === 'diario') setCurrentDate(subDays(currentDate, 1));
    };

    const avancar = () => {
        if (vizualizacao === 'mensal') setCurrentDate(addMonths(currentDate, 1));
        if (vizualizacao === 'semanal') setCurrentDate(addWeeks(currentDate, 1));
        if (vizualizacao === 'diario') setCurrentDate(addDays(currentDate, 1));
    };

    const irParaDiaAtual = () => {
        setCurrentDate(new Date());
    };

    const mudarVisualizacao = (novaVizualizacao: Visualizacao) => {
        setVizualizacao(novaVizualizacao);
    };

    const onHoverFilterHandler = () => {
        setOnHoverFilter(!onHoverFilter);
    };

    const handleClickOutsideFilter = (event: MouseEvent) => {
        const target = event.target as Node;

        if (filterRef.current && !(filterRef.current as any).contains(target) && filter.current && !(filter.current as any).contains(target)) {
            setOnHoverFilter(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideFilter);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideFilter);
        };
    }, []);

    return (
        <div className="background-calendario">
            <div className='header'>
                <div className='navegacao'>
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
                    <button style={{ color: vizualizacao === 'mensal' ? '#88B702' : '' }} onClick={() => mudarVisualizacao('mensal')}>Mensal</button>
                    <button style={{ color: vizualizacao === 'semanal' ? '#88B702' : '' }} onClick={() => mudarVisualizacao('semanal')}>Semanal</button>
                    <button style={{ color: vizualizacao === 'diario' ? '#88B702' : '' }} onClick={() => mudarVisualizacao('diario')}>Diário</button>

                </div>
                <div className="funil">
                    <div className='iconeFiltro'>
                        <Funnel size={32} onClick={onHoverFilterHandler} ref={filter} />
                    </div>
                    {onHoverFilter && <div className="modalFiltro" ref={filterRef}>
                        <div className='inputHoras'>
                            <label>Inicio:</label>
                            <InputMask
                                mask="99:99"
                                placeholder="00:00"
                                value={startHour}
                                onChange={handleStartHourChange}
                                className='inputHora'
                            />
                            <label>Fim:</label>
                            <InputMask
                                mask="99:99"
                                placeholder="00:00"
                                value={endHour}
                                onChange={handleEndHourChange}
                                className='inputHora'
                            />
                        </div>
                    </div>}
                </div>
            </div>
            <div className='dashboard-calendario'>
                {vizualizacao === 'mensal' && Mensal(semanasDoMes, currentDate)}
                {vizualizacao === 'semanal' && Semanal(currentDate)}
                {vizualizacao === 'diario' && Diario(currentDate, dateRange)}
            </div>
        </div>
    );
};

export default Calendario;
