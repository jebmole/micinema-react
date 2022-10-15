import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PeliculaDetallePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [url, setUrl] = useState('');

  useEffect(() => {

    console.log("Id parametro", id);

    const getDetailMovieAsync = async () => {

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a6db559033af943be136a2110dbd4b5f&language=es-CO`,
        {
          method: "GET",
        }
      );

      const jsonData = await response.json();
      console.log(jsonData);
      setMovie(jsonData);
    };

    const getMovieImagesAsync = async () => {

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a6db559033af943be136a2110dbd4b5f&language=es-CO`,
          {
            method: "GET",
          }
        );
  
        const jsonData = await response.json();
        if(jsonData.results){
            const video = jsonData.results[0];
            setUrl(`https://www.youtube.com/embed/${video.key}`);
        }
        console.log(jsonData);
      };
    //Este codigo se ejecuta cada vez que se renderiza el componente
    getDetailMovieAsync();
    getMovieImagesAsync();
  }, []);

  return (
  <div>Movie { movie.title }
  <iframe width="820" height="315" title="Preview" src={url}></iframe>
  
  </div>);
}

export default PeliculaDetallePage;
