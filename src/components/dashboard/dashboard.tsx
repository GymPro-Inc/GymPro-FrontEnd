// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import { Basket, Gear, House, SignOut, UsersThree } from '@phosphor-icons/react/dist/ssr';

const Dashboard = () => {
  const [isMenuExpanded, setMenuExpanded] = useState(false);

  const listDashboardMenuItems = [
    { icon: <House />, label: 'Home' },
    { icon: <Basket />, label: 'Vendas' },
    { icon: <UsersThree />, label: 'Pessoas' },
    { icon: <Gear />, label: 'Configurações' },
    { icon: <SignOut />, label: 'Sair'}
  ]

  const handleMouseEnter = () => {
    setMenuExpanded(true);
  };

  const handleMouseLeave = () => {
    setMenuExpanded(false);
  };

  return (
    <div className="dashboard-container">
      <div
        className={`menu-container ${isMenuExpanded ? 'expanded' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Botões na barra lateral */}

        <ul className='lista'>
          {
            listDashboardMenuItems.map((menuItem, index) => (
              <li key={index} className={menuItem.label}>
                <button className={`icon-button`}>
                  {menuItem.icon}
                  {isMenuExpanded && <span>{menuItem.label}</span>}
                </button>
              </li>
            ))
          }
        </ul>
      </div>

      {/* Conteúdo principal do dashboard aqui */}
      <div className="main-content">
        <h1>Dashboard</h1>
        {/* Outros componentes e conteúdos aqui */}
      </div>
    </div>
  );
};

export default Dashboard;
