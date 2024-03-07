import React, { useState } from 'react';
import { ChatText, EnvelopeSimple, MagnifyingGlass } from "@phosphor-icons/react";
import './style.css';
import { Input } from '../ui/input';

const TopBar = () => {

    const [isClicked, setIsClicked] = useState(false);

    const onClickPerfil = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="topbar">
            <div></div>
            <div className="flex items-center content-center flex-rows border focus:border-white">
                <Input
                    type="text"
                    placeholder="Pesquisar..."
                    className="search-input"
                />
                <MagnifyingGlass className="icon-search" />
            </div>
            <div className='topbar-rigth'>
                <div className='icones-rigth'>
                    <EnvelopeSimple size={26} />
                    <ChatText size={26} />
                </div>
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


