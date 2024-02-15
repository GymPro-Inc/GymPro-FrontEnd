// App.tsx
import './App.css';
import MenuSlider from './components/menuSlider/menuSlider';
import TopBar from './components/topBar/TopBar';
import { Rotas } from './router';

function App() {
  return (
    <div className="app-container">
      <MenuSlider />
      <TopBar />
      <Rotas />
    </div>
  );
}

export default App;