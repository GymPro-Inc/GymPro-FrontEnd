// App.tsx
import './App.css';
import { Rotas } from './router';
import { Slide, ToastContainer, Zoom } from 'react-toastify';
import { useAuth } from './hooks/useAuth';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const { userLogged } = useAuth()
  return (
    <GoogleOAuthProvider clientId="187186328176-aj8t1h9vqt0cq8v483o1682jksngk0m9.apps.googleusercontent.com">
      <ToastContainer theme='dark' position='top-right' transition={Slide} />
      <Rotas />
    </GoogleOAuthProvider>
  );
}

export default App;


