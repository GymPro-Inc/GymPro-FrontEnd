import React from 'react';
import './topBar.css';

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar-right">
                <div className="imagem-perfil">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"  className="perfil-img" alt="placeholder"/>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

