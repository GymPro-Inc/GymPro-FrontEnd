import Tabela from "@/components/tabela/tabela";
import colunas from "./colunas";
import { Cliente } from "@/types/Cliente";

export const dados = (): Cliente[] => {
    return [
        {
            id: 1,
            nome: 'Fulano',
            cpf: '123.456.789-00',
            email: 'fulano@gmail.com',
            telefone: '(11) 99999-9999'
        }, {
            id: 2,
            nome: 'Ciclano',
            cpf: '987.654.321-00',
            email: 'ciclano@gmail.com',
            telefone: '(11) 99999-9999'
        }
    ]
}

export default function cliente() {
    return (
        <div className="flex flex-col h-[95%] w-[95%]">
            <h1>Cliente</h1>
            <Tabela
                colunas={colunas()}
                dados={dados()}
            />
        </div>
    )
}   