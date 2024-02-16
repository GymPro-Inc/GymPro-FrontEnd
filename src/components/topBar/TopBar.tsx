import React, { useState } from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react";
import './topBar.css';

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
                <MagnifyingGlass className="icon-search"/>
            </div>
            {/* <div className="perfil-img"></div> */}
            <div className="topbar-right" style={{ height: isClicked? "200px" : "44px" }} onClick={onClickPerfil}> 
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" className="perfil-img" alt="placeholder" />
                <div className="perfil-info">
                    <span className="perfil-name">Olá, Guilherme!</span>
                    <span className="perfil-time">Sexta - Feira 16/02/2024</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;


