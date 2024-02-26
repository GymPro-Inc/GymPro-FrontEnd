import { Route, Routes, } from "react-router-dom";
import Criar from "./screens/login/Criar";
import Login from "./screens/login/login";
import { useState, useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import LoadingScreen from "./screens/loading/Loading";
import { Home } from "./screens/home";
import Calendario from "./components/calendar";
import Esqueceu from "./screens/login/Esqueceu";

function MainRoutes() {

  const { userLogged, handleGetUserLoggedFromStorageData } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleLoadStorageData()
  }, [])

  async function handleLoadStorageData() {
    setIsLoading(true);
    setTimeout(() => {
      handleGetUserLoggedFromStorageData().finally(() => setIsLoading(false))
    }, 400)
  }

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }

  if (!userLogged?.token) {
    return (
      <Routes>
        <Route path="/esqueceu" element={<Esqueceu />} />
        <Route path="/criar" element={<Criar />} />
        <Route path="/" element={<Login />} />
      </Routes>
    )
  }

  return (
    <Home>
      <Routes>
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </Home>
  )

}

export default MainRoutes;
