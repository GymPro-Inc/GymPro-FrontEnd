import { format, eachDayOfInterval, isSameMonth, isSameWeek, isToday } from 'date-fns';
import { pt } from 'date-fns/locale';
import './mensal.css';

const Mensal = (semanasDoMes : Date[], currentDate : Date) => {
    return (
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
    );
}

export default Mensal;
