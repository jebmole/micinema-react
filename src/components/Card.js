import React from "react";

function Card({ movie }) {

  console.log(movie);  
  return (
    <div className="card" style={{ width: "18rem", marginRight:"10px", marginBottom: "20px" }}>
      <img
        src={`http://image.tmdb.org/t/p/w1280${movie.poster_path}`}
        className="card-img-top"
        alt={movie.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <div>
          <span className="card-text">{movie.original_title}</span>
          <span className="card-text">{movie.release_date}</span>
          <span className="card-text badge bg-secondary">{movie.adult ? "Adultos" : "Todo Publico"}</span>
        </div>

        <div style={{ marginTop: "20px"}}>
            <a href="#" className="btn btn-primary">
            Ver detalles
            </a>
        </div>

      </div>
    </div>
  );
}

export default Card;
