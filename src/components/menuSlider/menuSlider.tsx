import React, { useEffect, useRef, useState } from 'react';
import './menuSlider.css';
import { House, User, Barbell, Gear, SignOut, CurrencyCircleDollar, List, Lockers, Student, Briefcase } from "@phosphor-icons/react";
import { MenuItem } from './menuItem';
import { MenuItensProps } from './menuItem/index';

const MenuSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState<number>();

  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(!isHovered);
  };

  const handIsSelected = (id: number) => {
    setIsSelected(id);
  };

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node)) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, []);

  const menuItens: MenuItensProps[] = [
    {
      id: 1,
      className: 'MenuItemContainer',
      icon: <House size={32} />,
      isHovered: isHovered,
      isSelected: isSelected,
      link: '/',
      text: 'Home',
      handIsSelected: handIsSelected,
    }, {
      id: 3,
      link: '/treinos',
      isHovered: isHovered,
      isSelected: isSelected,
      icon: <Barbell size={32} />,
      text: 'Treinos',
      className: 'MenuItemContainer',
      handIsSelected: handIsSelected,
    }, {
      id: 4,
      link: '/armarios',
      isHovered: isHovered,
      isSelected: isSelected,
      icon: <Lockers size={32} />,
      text: 'Armarios',
      className: 'MenuItemContainer',
      handIsSelected: handIsSelected,
    }, {
      id: 5,
      link: '/alunos',
      isHovered: isHovered,
      isSelected: isSelected,
      icon: <Student size={32} />,
      text: 'Alunos',
      className: 'MenuItemContainer',
      handIsSelected: handIsSelected,
    }, {
      id: 6,
      link: '/financeiro',
      isHovered: isHovered,
      isSelected: isSelected,
      icon: <CurrencyCircleDollar size={32} />,
      text: 'Financeiro',
      className: 'MenuItemContainer',
      handIsSelected: handIsSelected,
    }, {
      id: 7,
      link: '/acadamia',
      isHovered: isHovered,
      isSelected: isSelected,
      icon: <Briefcase size={32} />,
      text: 'Academia',
      className: 'MenuItemContainer',
      handIsSelected: handIsSelected,
    }, {
      id: 8,
      link: '/configuracoes',
      isHovered: isHovered,
      isSelected: isSelected,
      icon: <Gear size={32} />,
      text: 'Configurações',
      className: 'MenuItemContainer',
      handIsSelected: handIsSelected,
    }, {
      id: 9,
      link: '/sair',
      isHovered: isHovered,
      isSelected: isSelected,
      icon: <SignOut size={32} />,
      text: 'Sair',
      className: 'MenuItemContainer',
      handIsSelected: handIsSelected,
    }
  ];

  return (
    <div
      className="menu-slider"
      style={{ width: isHovered ? 250 : 60, transition: "ease-in-out 0.5s" }}
      ref={menuRef}
    >
      <button className="menu-slider-header" onClick={handleMouseEnter} style={{ color: isHovered ? "#88B702" : 'white', transition: "all 0.5s" }}>
        <List size={32} />
      </button>
      {menuItens.map((props) => <MenuItem key={props.id} {...props} />)}
    </div>
  );
};

export default MenuSlider;