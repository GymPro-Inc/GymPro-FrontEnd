import React, { useEffect, useState } from 'react';
import { format, startOfMonth, subMonths, addMonths, eachWeekOfInterval, addWeeks, addDays, subWeeks, subDays, eachDayOfInterval } from 'date-fns';
import { pt } from 'date-fns/locale';
import './visualizacao.css';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import Mensal from './visualizacao/mensal';
import Semanal from './visualizacao/semanal';
import Diario from './visualizacao/diario';

type Visualizacao = 'mensal' | 'semanal' | 'diario';

const Calendario: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [vizualizacao, setVizualizacao] = useState<Visualizacao>('mensal');
    const [startHour, setStartHour] = useState(''); // Estado para armazenar a hora inicial
    const [endHour, setEndHour] = useState('');     // Estado para armazenar a hora final
    const [selectedHour, setSelectedHour] = useState('');   // Estado para armazenar a hora selecionada
    const [dateRange, setDateRange] = useState<Date[]>([]); // Estado para armazenar o array de Date

    const handleStartHourChange = (event: any) => {
        setStartHour(event.target.value);
    };

    const handleEndHourChange = (event: any) => {
        setEndHour(event.target.value);
    };

    const handleSelectChange = (event: any) => {
        setSelectedHour(event.target.value);
    };

    useEffect(() => {
        const generateHourOptions = () => {
            const start = new Date(`2022-01-01T${startHour}`);
            const end = new Date(`2022-01-01T${endHour}`);
            const hourOptions = [];

            while (start <= end) {
                const formattedHour = start.toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit',
                });
                hourOptions.push(formattedHour);
                start.setTime(start.getTime() + 60 * 60 * 1000);
            }

            return hourOptions;
        };

        const hours = generateHourOptions();
        setHourOptions(hours);
        setDateRange(generateDateRange());
    }, [startHour, endHour]);

    const generateDateRange = () => {
        const start = new Date(`2022-01-01T${startHour}`);
        const end = new Date(`2022-01-01T${endHour}`);
        const dateRange = [];

        while (start <= end) {
            dateRange.push(new Date(start));
            start.setTime(start.getTime() + 60 * 60 * 1000);
        }

        return dateRange;
    };

    const [hourOptions, setHourOptions] = useState<string[]>([]);
    // Removida a duplicação da declaração da variável dateRange
    // const [dateRange, setDateRange] = useState<Date[]>([]);

    const inicioDoMes = startOfMonth(currentDate);
    const finalDoMes = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const semanasDoMes = eachWeekOfInterval({ start: inicioDoMes, end: finalDoMes }, { weekStartsOn: 1 }).slice(0, 5);
    const mesDia = vizualizacao === 'diario' ? format(currentDate, 'dd, MMMM, yyyy', { locale: pt }) : format(currentDate, 'MMMM, yyyy', { locale: pt });

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
        setVizualizacao(novaVizualizacao)
    }

    return (
        <div className="background-calendario">
            <div className='header'>
                <div className='navegacao'>
                    <div>
                        <label>Hora Inicial:</label>
                        <input type="time" value={startHour} onChange={handleStartHourChange} />
                        <label>Hora Final:</label>
                        <input type="time" value={endHour} onChange={handleEndHourChange} />
                    </div>
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
            </div>
            <div className='dashboard-calendario'>
                {vizualizacao === 'mensal' && Mensal(semanasDoMes, currentDate)}
                {vizualizacao === 'semanal' && Semanal(currentDate)}
                {vizualizacao === 'diario' && Diario(currentDate, dateRange)} {/* Utilizando dateRange */}
            </div>
        </div>
    );
};

export default Calendario;
