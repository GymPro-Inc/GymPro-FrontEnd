// App.tsx
import './App.css';
import { Rotas } from './router';
import { Slide, ToastContainer, Zoom } from 'react-toastify';
import { useAuth } from './hooks/useAuth';
import { GoogleOAuthProvider } from '@react-oauth/google';

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


