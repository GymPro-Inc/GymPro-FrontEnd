import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ToastContainer, Slide } from 'react-toastify'
import MainRoutes from './routes.tsx'
import './style/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <GoogleOAuthProvider clientId="187186328176-aj8t1h9vqt0cq8v483o1682jksngk0m9.apps.googleusercontent.com">
        <ToastContainer limit={4} theme='dark' position='top-right' transition={Slide} />
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </AuthProvider>
  </React.StrictMode>
)
