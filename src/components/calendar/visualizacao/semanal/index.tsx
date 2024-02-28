import { format, startOfWeek, addDays, isSameWeek, isToday } from 'date-fns';
import { pt } from 'date-fns/locale';
import './semanal.css';

interface SemanalProps {
  currentDate: Date;
}

const Semanal = ({ currentDate } : SemanalProps ) => {
  const diasDaSemana = [];
  let startDay = startOfWeek(currentDate);
  
  for (let i = 0; i < 7; i++) {
    const dia = addDays(startDay, i);
    diasDaSemana.push(dia);
  }

  return (
    <div className="calendario-semanal">
      <div className="semanal">
        {diasDaSemana.map((dia, indiceDia) => (
          <div
            key={indiceDia}
            className={`dia-semanal ${isSameWeek(dia, currentDate) ? 'semana-atual-semanal' : ''} ${isToday(dia) ? 'hoje-semanal' : ''}`}
          >
            {/* Adicione uma verificação para garantir que a data seja válida antes de formatar */}
            {dia ? (
              <>
                <span className="numero-do-dia-semanal">{format(dia, 'dd')}</span>
                <span className="dia-da-semana-semanal">{format(dia, 'EEEE', { locale: pt })}</span>
              </>
            ) : (
              <span>Data Inválida</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Semanal;
