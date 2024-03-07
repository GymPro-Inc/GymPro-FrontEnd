import { format, startOfWeek, addDays, isSameWeek, isToday } from 'date-fns';
import { pt } from 'date-fns/locale';

interface SemanalProps {
  currentDate: Date;
}

const Semanal = ({ currentDate }: SemanalProps) => {
  const diasDaSemana = [];
  let startDay = startOfWeek(currentDate);

  for (let i = 0; i < 7; i++) {
    const dia = addDays(startDay, i);
    diasDaSemana.push(dia);
  }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex h-full gap-20 w-full">
        {diasDaSemana.map((dia, indiceDia) => (
          <div
            key={indiceDia}
            className={`p-10 border text-center h-full w-90% flex flex-col justify-between cursor-pointer
              ${isSameWeek(dia, currentDate) ? 'bg-white hover:border-[#88B702] border-2 semana-atual-semanal' : 'text-gray-300 border-gray-300 font-bold text-gray-300 outra-semana'}
              ${isToday(dia) ? 'bg-[#88b702] hoje-semanal' : ''} rounded-2xl text-black transition ease-in-out duration-300`}
          >
            {/* Adicione uma verificação para garantir que a data seja válida antes de formatar */}
            {dia ? (
              <>
                <span className="text-xl font-bold">{format(dia, 'dd')}</span>
                <span className="text-sm font-light">{format(dia, 'EEEE', { locale: pt })}</span>
              </>
            ) : (
              <span>Data Inválida</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Semanal;
