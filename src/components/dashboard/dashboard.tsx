// PainelDeControle.tsx

import React, { useState } from 'react';
import './dashboard.css';
import { List, Basket, Gear, House, SignOut, UsersThree, PiggyBank } from '@phosphor-icons/react/dist/ssr';

interface ItemMenu {
  icone: JSX.Element;
  rotulo: string;
  conteudoPainel: string;
  isMenu?: boolean;
}

const PainelDeControle: React.FC = () => {
  const [menuExpandido, setMenuExpandido] = useState(false);

  const itensMenu: ItemMenu[] = [
    { icone: <House />, rotulo: 'Home', conteudoPainel: 'Conteúdo para Home' },
    { icone: <Basket />, rotulo: 'Vendas', conteudoPainel: 'Conteúdo para Vendas' },
    { icone: <UsersThree />, rotulo: 'Clientes', conteudoPainel: 'Conteúdo para Clientes' },
    { icone: <List />, rotulo: '', conteudoPainel: '', isMenu: true },
    { icone: <PiggyBank />, rotulo: 'Financeiro', conteudoPainel: 'Conteúdo para Financeiro' },
    { icone: <Gear />, rotulo: 'Configurações', conteudoPainel: 'Conteúdo para Configurações' },
    { icone: <SignOut />, rotulo: 'Sair', conteudoPainel: 'Conteúdo para Sair' }
  ];

  const lidarComCliqueBotao = (rotulo: string) => {
    // Implemente a lógica necessária ao clicar em um botão
    console.log(`Botão ${rotulo} clicado`);
  };

  return (
    <div className="painel-de-controle-container">
      <div
        className={`menu-container ${menuExpandido ? 'expandido' : ''}`}
        onMouseEnter={() => setMenuExpandido(true)}
        onMouseLeave={() => setMenuExpandido(false)}
      >
        <ul className='lista'>
          {itensMenu.map((item, index) => (
            (item?.isMenu && !menuExpandido) || (!item?.isMenu && menuExpandido) ? 
            <li key={index} className={item.rotulo}>
              <button
                className={`botao-icone`}
                onClick={() => lidarComCliqueBotao(item.rotulo)}
              >
                {item.icone}
                {menuExpandido && <span>{item.rotulo}</span>}
              </button>
            </li>
            : <></>
          ))}
        </ul>
      </div>

      <div className="conteudo-principal">
        {/* Adicione aqui o conteúdo principal do painel de controle */}
      </div>
    </div>
  );
};

export default PainelDeControle;
