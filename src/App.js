import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {

  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(()=>{

    const getMoviesAsync = async () => {
    
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=a6db559033af943be136a2110dbd4b5f&language=es-CO", {
        method: "GET",
      });
  
      const jsonData = await response.json();
      setRecentMovies(jsonData.results);
    }

    //Este codigo se ejecuta cada vez que se renderiza el componente
    getMoviesAsync();

  }, [])

  return (
    <div>
      <Navbar />
      <Carousel movies={recentMovies.slice(0, 3)} />
    </div>
  );
}

export default App;
