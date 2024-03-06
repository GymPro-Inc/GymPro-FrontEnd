import React, { useEffect, useRef, useState } from 'react';
import { format, startOfMonth, subMonths, addMonths, eachWeekOfInterval, addWeeks, addDays, subWeeks, subDays, eachDayOfInterval } from 'date-fns';
import { pt } from 'date-fns/locale';
import { CaretLeft, CaretRight, Funnel } from '@phosphor-icons/react';
import Mensal from './visualizacao/mensal';
import Semanal from './visualizacao/semanal';
import Diario from './visualizacao/diario';

type Visualizacao = 'mensal' | 'semanal' | 'diario';

const Calendario = () => {
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
        <div className="bg-gray-90 backdrop-filter backdrop-blur-md bg-opacity-70 border border-white border-opacity-30 p-8 rounded-lg w-5/6 h-5/6 mt-20">
            <div className='header flex items-center justify-between mb-8'>
                <div className='navegacao flex items-center w-full justify-center mb-8'>
                    <button onClick={retroceder} className='mr-2'>
                        <CaretLeft size={6} />
                    </button>
                    <span className='diaMes text-lg font-bold'>{mesDia.charAt(0).toUpperCase() + mesDia.slice(1)}</span>
                    <button onClick={avancar} className='ml-2'>
                        <CaretRight size={6} />
                    </button>
                </div>
                <div className='botao-hoje flex items-center justify-center bg-green-500 text-white rounded-full px-4 py-2 mb-4'>
                    <button onClick={irParaDiaAtual}>Hoje</button>
                </div>
            </div>
            <div className='visualizacao mb-4 flex justify-center space-x-4'>
                <button className={`text-white bg-transparent border-none cursor-pointer rounded-full font-size-14 h-full w-32 focus:outline-none focus:ring focus:border-blue-300 ${vizualizacao === 'mensal' ? 'text-green-500 bg-green-200' : ''}`} onClick={() => mudarVisualizacao('mensal')}>Mensal</button>
                <button className={`text-white bg-transparent border-none cursor-pointer rounded-full font-size-14 h-full w-32 focus:outline-none focus:ring focus:border-blue-300 ${vizualizacao === 'semanal' ? 'text-green-500 bg-green-200' : ''}`} onClick={() => mudarVisualizacao('semanal')}>Semanal</button>
                <button className={`text-white bg-transparent border-none cursor-pointer rounded-full font-size-14 h-full w-32 focus:outline-none focus:ring focus:border-blue-300 ${vizualizacao === 'diario' ? 'text-green-500 bg-green-200' : ''}`} onClick={() => mudarVisualizacao('diario')}>Diário</button>
            </div>
            <div className="funil flex items-center justify-end">
                <div className='iconeFiltro cursor-pointer' onClick={onHoverFilterHandler}>
                    <Funnel size={6} />
                </div>
                {onHoverFilter && <div className="modalFiltro absolute flex items-center flex-row justify-center text-center w-72 h-72 top-12 right-16 bg-opacity-90 backdrop-blur-md border border-white border-opacity-30 shadow-lg rounded-2xl">
                    <div className='inputHoras'>
                        <label className='text-white'>Inicio:</label>
                        <InputMask
                            mask="99:99"
                            placeholder="00:00"
                            value={startHour}
                            onChange={handleStartHourChange}
                            className='inputHora border-1 border-white rounded-full h-10 px-4 text-white bg-transparent'
                        />
                        <label className='text-white'>Fim:</label>
                        <InputMask
                            mask="99:99"
                            placeholder="00:00"
                            value={endHour}
                            onChange={handleEndHourChange}
                            className='inputHora border-1 border-white rounded-full h-10 px-4 text-white bg-transparent'
                        />
                    </div>
                </div>}
            </div>
            <div className='dashboard-calendario overflow-auto'>
                {vizualizacao === 'mensal' && <Mensal semanasDoMes={semanasDoMes} currentDate={currentDate} />}
                {vizualizacao === 'semanal' && <Semanal currentDate={currentDate} />}
                {vizualizacao === 'diario' && <Diario currentDate={currentDate} timeInterval={dateRange} />}
            </div>
        </div>
    );
};

export default Calendario;
