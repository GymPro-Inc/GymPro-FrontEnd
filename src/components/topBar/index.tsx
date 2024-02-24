import React, { useState } from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react";
import './style.css';

const TopBar = () => {

    const [isClicked, setIsClicked] = useState(false);

    const onClickPerfil = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="topbar">
            <div></div>
            <div className="topbar-middle">
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="search-input"
                />
                <MagnifyingGlass className="icon-search" />
            </div>
            <div>
                <div className="imagem-perfil" onClick={onClickPerfil}>
                    <div className='perfil-img'>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="perfil" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopBar;


