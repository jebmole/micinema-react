function Carousel({ movies }) {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {movies.map((movie, index) => {
          return (
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {movies.map((movie, index) => {
          return (
            <div className={ index === 0 ? "carousel-item active" : "carousel-item"} data-bs-interval="2000">
              <img
                src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                className="d-block w-100"
                alt={movie.title}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{movie.title}</h5>
                <p>
                  {movie.overview}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
