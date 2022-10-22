import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SalaPage from "./pages/SalaPage";
import FuncionPage from "./pages/FuncionPage";
import PeliculaPage from "./pages/PeliculaPage";
import ClientePage from "./pages/ClientePage";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetallePeliculaPage from "./pages/DetallePeliculaPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={ <HomePage /> } />
        <Route path="/salas" element={ <SalaPage /> } />
        <Route path="/peliculas" element={ <PeliculaPage /> } />
        <Route path="/peliculas/:movieId" element={ <DetallePeliculaPage /> } />
        <Route path="/clientes" element={ <ClientePage /> } />
        <Route path="/funciones" element={ <FuncionPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
