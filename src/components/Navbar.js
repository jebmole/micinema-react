import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap"
            width="30"
            height="24"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/home" className={({isActive}) => isActive ? "nav-link active" : "nav-link" }>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/clientes" className={({isActive}) => isActive ? "nav-link active" : "nav-link" }>
                Clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/salas" className={({isActive}) => isActive ? "nav-link active" : "nav-link" }>
                Salas
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Peliculas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Funciones
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
