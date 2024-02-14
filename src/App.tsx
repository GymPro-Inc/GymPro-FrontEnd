// App.tsx
import React from 'react';
import Dashboard from './components/dashboard/dashboard';
import './App.css';
import { Rotas } from './router';

function App() {
  return (
    <div className="app-container">
        <Dashboard />
        <Rotas />
    </div>
  );
}

export default App;