import React, { ReactNode } from 'react';
import { Link } from "react-router-dom";

export interface MenuItensProps {
    id: number,
    link: string;
    isHovered: boolean;
    isSelected?: number;
    icon: ReactNode;
    text: string;
    className: string;
    handIsSelected: (id: number) => void;
}

export function MenuItem({ icon, isHovered, isSelected, className, id, link, text, handIsSelected }: MenuItensProps) {

    return (
        <Link to={link}>
            <div className={className} onClick={() => handIsSelected(id)} style={{
                scale: isHovered ? 1.1 : 1,
                background: isHovered && isSelected === id ? '#88B702' : 'transparent',
                color: isHovered && isSelected === id ? 'black' : 'white',
            }}>
                <div style={{ opacity: 1 }}>
                    {icon}
                </div>
                <span style={{ opacity: isHovered ? 1 : 0, width: isHovered ? "100%" : "0%", transition: "ease-in-out 0.5s", overflow: "hidden", textAlign: "left", marginLeft: 8 }}>{text}</span>
                {!isHovered && isSelected === id && <div className='menu-selected' style={{ background: "#88B702" }} />}
            </div>
        </Link>
    );
}
