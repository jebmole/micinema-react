import React from "react";
import Card from "./Card";

function ListadoPeliculas({ movies }) {
  return (
    <div className="tarjetas row text-center">
      {movies.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default ListadoPeliculas;
