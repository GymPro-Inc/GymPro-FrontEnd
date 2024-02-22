// App.tsx
import './App.css';
import MenuSlider from './components/menuSlider/menuSlider';
import TopBar from './components/topBar/TopBar';
import { Rotas } from './router';
import BackgroundFlutuante from './components/BackgroundFlutuante/BackgroundFlutuante';
import Login from './screens/login/login';
import { Slide, ToastContainer, Zoom } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { Route } from 'react-router-dom';

function App() {
  const { userLogged } = useAuth()
  return (
    <>
      <ToastContainer theme='dark' position='top-right' transition={Slide} />
      <Rotas />
    </>
  );
}

export default App;


