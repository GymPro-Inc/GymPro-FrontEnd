import React, { useState } from 'react';
import { format, eachDayOfInterval, isSameMonth, isSameWeek, isToday } from 'date-fns';
import { pt } from 'date-fns/locale';
import Evento from '../../modal/evento';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

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
    <Dialog>
      <div className="grid grid-cols-1 items-center h-4/5 gap-5">
        {semanasDoMes.map((semana, indiceSemana) => (
          <div key={indiceSemana} className="grid grid-cols-7 gap-5">
            {eachDayOfInterval({
              start: semana,
              end: new Date(semana.getFullYear(), semana.getMonth(), semana.getDate() + 6),
            }).map((dia, indiceDia) => (
              <DialogTrigger>
                <div
                  key={indiceDia}
                  onClick={() => handleDayClick(dia)}
                  className={`border p-3 text-center h-full flex flex-col justify-between cursor-pointer
                ${isSameMonth(dia, currentDate) ? ' hover:border-200 hover:text-200 border-2' : 'text-gray-300 border-gray-300 font-bold text-gray-300'}
                ${isToday(dia) ? 'bg-200 text-white hover:bg-white' : 'bg-white'}
                rounded-2xl text-black gap-[100px] `}
                >
                  <span className="font-bold">{format(dia, 'dd')}</span>
                  <span className="font-bold">{format(dia, 'EEEE', { locale: pt })}</span>
                </div>
              </DialogTrigger>
            ))}
          </div>
        ))}
        {selectedDate && <Evento date={selectedDate} onClose={() => setSelectedDate(null)} />}
      </div>
    </Dialog>
  );
};

export default Mensal;
