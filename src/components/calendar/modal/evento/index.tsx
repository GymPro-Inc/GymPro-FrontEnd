import { format } from 'date-fns';
import './evento.css';
import { X } from '@phosphor-icons/react';
import { pt } from 'date-fns/locale';

interface EventoProps {
    date: Date;
    onClose: () => void;
}

const Evento = ({ date, onClose }: EventoProps) => {
    return (
        <div className="modalEvento">
            <div className="barra">
                <X className="botao-fechar" onClick={onClose} />
            </div>
            <div className="conteudo">
                <div className="formulario">
                    <div className='titulo'>
                        <h2>Cadastrar Evento</h2>
                        <p>{format(date, 'EEEE', { locale: pt })} - {date.toLocaleDateString()}</p>
                    </div>
                    <div className='modal'>
                        <div className='campoTexto'>
                            <label>Cliente: </label>
                            <input
                                required
                                type="text"
                                placeholder="email@exemplo.com"
                                onChange={(event) => {
                                    if (event) {
                                        // Trate o email conforme necessário
                                    }
                                }}
                            />
                        </div>
                        <div className='campoTexto'>
                            <label>Espaço: </label>
                            <select
                                required
                                className="combobox" // Adicionei uma classe para estilização
                                onChange={(event) => {
                                    if (event) {
                                        // Trate a seleção do espaço conforme necessário
                                    }
                                }}
                            >
                                <option value="espaco1">Espaço 1</option>
                                <option value="espaco2">Espaço 2</option>
                                {/* Adicione mais opções conforme necessário */}
                            </select>
                        </div>
                        <div className='campoPeriodo'>
                            <div className="periodo">
                                <label>Início:</label>
                                <input
                                    required
                                    type="datetime-local"
                                    value={format(date, 'yyyy-MM-dd') + 'T00:00'}
                                    onChange={(event) => {
                                        if (event) {
                                            // Trate o início do período conforme necessário
                                        }
                                    }}
                                />
                                <label>Fim:</label>
                                <input
                                    required
                                    type="datetime-local"
                                    value={format(date, 'yyyy-MM-dd') + 'T00:00'}
                                    onChange={(event) => {
                                        if (event) {
                                            // Trate o fim do período conforme necessário
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className='botoes'>
                            <button className="botaoSalvar" onClick={() => {
                                // Salve o evento conforme necessário
                                onClose();
                            }}>Salvar</button>
                            <button className="botaoCancelar" onClick={onClose}>Cancelar</button>
                        </div>
                    </div>
                </div>
                <div className="eventos">
                    {/* Conteúdo da seção de eventos */}
                </div>
            </div>
        </div>
    );
}

export default Evento;
