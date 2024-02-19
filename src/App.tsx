// App.tsx
import './App.css';
import MenuSlider from './components/menuSlider/menuSlider';
import TopBar from './components/topBar/TopBar';
import { Rotas } from './router';
import BackgroundFlutuante from './components/BackgroundFlutuante/BackgroundFlutuante';
import Login from './components/screen/login/login';

function App() {

  const isLogged = false;

  return (
    !isLogged ? <Rotas /> :
      <div className='backgorund'>
        <BackgroundFlutuante />
        <div className="app-container">
          <MenuSlider />
          <TopBar />
          <Rotas />
        </div>
      </div>
  );
}

export default App;