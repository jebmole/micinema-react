
import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SalaPage from "./pages/SalaPage";
import PeliculaDetallePage from "./pages/PeliculaDetallePage";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/salas" element={<SalaPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pelicula/:id" element={<PeliculaDetallePage />} />
        <Route path="*" element={ <h1>NOT FOUND - 404 </h1> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
