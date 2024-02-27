import React from 'react';
import { format, isToday } from 'date-fns';
import { pt } from 'date-fns/locale';
import './diario.css';

const Diario = ( currentDate : Date, timeInterval : Date[]) => {
  return (
    <div className="calendario-diario">
      <div className={`dia-diario ${isToday(currentDate) ? 'hoje-diario' : ''}`}>
        {/* Adicione uma verificação para garantir que a data seja válida antes de formatar */}
        {currentDate ? (
          <>
            <span className="numero-do-dia-diario">{format(currentDate, 'dd')}</span>
            <div className="horas-diario">
              {timeInterval.map((hora, index) => (
                <div key={index} className="hora-diario">
                  {format(hora, 'HH:mm')}
                </div>
              ))}
            </div>
            <span className="dia-da-semana-diario">{format(currentDate, 'EEEE', { locale: pt })}</span>
          </>
        ) : (
          <span>Data Inválida</span>
        )}
      </div>
    </div>
  );
}

export default Diario;
