import React, { useState, useEffect } from 'react';
import './Loading.css';

const LoadingScreen: React.FC = () => {

    return (
        <div style={{background: "red"}}>
            <h1 style={{color: "white"}}>Carregando...</h1>
        </div>
    );
};

export default LoadingScreen;