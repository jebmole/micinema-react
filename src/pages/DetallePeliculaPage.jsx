import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetallePeliculaPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  //const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getMovieByIdAsync = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=a6db559033af943be136a2110dbd4b5f&language=es-CO`,
        {
          method: "GET",
        }
      );

      const jsonData = await response.json();
      setMovie(jsonData);
    };

    /*
    const getMovieVideoByIdAsync = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=a6db559033af943be136a2110dbd4b5f&language=es-CO`,
          {
            method: "GET",
          }
        );
  
        const jsonData = await response.json();
        setVideos(jsonData);
      };
    */

    //Este codigo se ejecuta cada vez que se renderiza el componente
    getMovieByIdAsync();
    //getMovieVideoByIdAsync();
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <div className="detalleMovie">
        <div className="contenido">
          <img
            src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt={movie.title}
          />
          {movie.overview}
        </div>
        <div className="preview">

        </div>
      </div>
    </div>
  );
}

export default DetallePeliculaPage;
