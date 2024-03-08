import React, { useState } from 'react';
import { format, eachDayOfInterval, isSameMonth, isSameWeek, isToday } from 'date-fns';
import { pt } from 'date-fns/locale';
import Evento from '../../modal/evento';

interface MensalProps {
  semanasDoMes: Date[];
  currentDate: Date;
}

const Mensal = ({ semanasDoMes, currentDate }: MensalProps) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayClick = (day: any) => {
    setSelectedDate(day);
  };

  return (
    <div className="grid grid-cols-1 items-center h-4/5 gap-5">
      {semanasDoMes.map((semana, indiceSemana) => (
        <div key={indiceSemana} className="grid grid-cols-7 gap-5">
          {eachDayOfInterval({
            start: semana,
            end: new Date(semana.getFullYear(), semana.getMonth(), semana.getDate() + 6),
          }).map((dia, indiceDia) => (
            <div
              key={indiceDia}
              onClick={() => handleDayClick(dia)}
              className={`border text-center h-full flex flex-col justify-between cursor-pointer
                ${isToday(dia) ? 'bg-[#88B702]' : ''}
                ${isSameMonth(dia, currentDate) ? 'bg-white hover:border-[#88B702] border-2' : 'text-gray-300 border-gray-300 font-bold text-gray-300'}
                ${isSameWeek(dia, currentDate) ? 'semana atual' : ''}
                rounded-2xl text-black gap-[100px] `}
            >
              <span className="text-xl">{format(dia, 'dd')}</span>
              <span className="text-sm">{format(dia, 'EEEE', { locale: pt })}</span>
            </div>
          ))}
        </div>
      ))}
      {selectedDate && <Evento date={selectedDate} onClose={() => setSelectedDate(null)} />}
    </div>
  );
};

export default Mensal;
