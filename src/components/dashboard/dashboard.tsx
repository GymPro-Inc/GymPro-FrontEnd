import React, { useState } from 'react';
import './dashboard.css';
import { House, User, Barbell, Users, Gear, SignOut, PiggyBank } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

const DashBoard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="menu-slider"
      style={{ width: isHovered ? 250 : 60, transition: "all 0.5s" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <Link to="/">
          <a className='MenuItemContainer' style={{ scale: isHovered ? 1.1 : 1 }}>
            <div style={{ opacity: 1 }}>
              <House size={32} />
            </div>
            <span style={{ opacity: isHovered ? 1 : 0 }}>Home</span>
          </a>
        </Link>
        <Link to="/perfil">
          <a className='MenuItemContainer' style={{ scale: isHovered ? 1.1 : 1 }}>
            <div style={{ opacity: 1 }}>
              <User size={32} />
            </div>
            <span hidden={!isHovered}>Perfil</span>
          </a>
        </Link>
        <Link to="/treinos">
          <a className='MenuItemContainer' style={{ scale: isHovered ? 1.1 : 1 }}>
            <div style={{ opacity: 1 }}>
              <Barbell size={32} />
            </div>
            <span style={{ opacity: isHovered ? 1 : 0 }}>Treinos</span>
          </a>
        </Link>
        <Link to="/clientes">
          <a className='MenuItemContainer' style={{ scale: isHovered ? 1.1 : 1 }}>
            <div style={{ opacity: 1 }}>
              <Users size={32} />
            </div>
            <span style={{ opacity: isHovered ? 1 : 0 }}>Clientes</span>
          </a>
        </Link>
        <Link to="/financeiro">
          <a className='MenuItemContainer' style={{ scale: isHovered ? 1.1 : 1 }}>
            <div style={{ opacity: 1 }}>
              <PiggyBank size={32} />
            </div>
            <span style={{ opacity: isHovered ? 1 : 0 }}>Financeiro</span>
          </a>
        </Link>
      </div>
      <Link to="/configuracoes">
        <a className='MenuItemContainer' style={{ scale: isHovered ? 1.1 : 1 }}>
          <div style={{ opacity: 1 }}>
            <Gear size={32} />
          </div>
          <span style={{ opacity: isHovered ? 1 : 0 }}>Configurações</span>
        </a>
      </Link>
      <Link to="/sair">
        <a className='MenuItemContainer' style={{ scale: isHovered ? 1.1 : 1 }}>
          <div style={{ opacity: 1 }}>
            <SignOut size={32} />
          </div>
          <span style={{ opacity: isHovered ? 1 : 0 }}>Sair</span>
        </a>
      </Link>
    </div>
  );
};

export default DashBoard;
