import React, { ReactNode } from 'react';
import { Link } from "react-router-dom";

export interface MenuItensProps {
    id: number,
    link: string;
    isHovered: boolean;
    isSelected?: number | null;
    icon: ReactNode;
    text: string;
    className: string;
    handIsSelected: (id: number) => void;
    onClick?: () => void;
}

export function MenuItem({ icon, isHovered, isSelected, className, id, link, text, handIsSelected, onClick }: MenuItensProps) {

    function handleClick(id: number) {
        handIsSelected(id); 
        onClick && onClick();
    }
    
    return (
        <Link to={link}>
            <div className={className} onClick={() => handleClick(id)} style={{
                scale: isHovered ? 1.1 : 1,
                background: isHovered && isSelected === id ? '#30BFB1' : 'transparent',
                color: "white",
                transition: "linear 0.2s",
            }}>
                <div style={{ color: !isHovered && isSelected === id ? "#30BFB1" : "#fff", opacity: 1, filter: !isHovered && isSelected === id ? "drop-shadow(0 0 10px #30BFB1)" : "" }}>
                    {icon}
                </div>
                <span style={{ opacity: isHovered ? 1 : 0, width: isHovered ? "100%" : "0%", transition: "ease-in-out 0.5s", overflow: "hidden", textAlign: "left", marginLeft: 8 }}>{text}</span>
                {!isHovered && isSelected === id && <div className='menu-selected' style={{ background: "#30BFB1", transition: "ease-in-out 0.5s", filter: isSelected === id ? "drop-shadow(0 0 10px #30BFB1)" : "drop-shadow(0 0 20px #30BFB1)" }} />}
            </div>
        </Link>
    );
}
