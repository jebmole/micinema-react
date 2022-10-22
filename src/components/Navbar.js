import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [estaLogueado, setEstaLogueado] = useState(true);
  
  useEffect(()=> {

    const login = async() =>{

      const credenciales = {
        "usuario": "alejandro",
        "password": "12433"
      };

      //Se invoca el api de login
       const response = await fetch("https://apicinema.azurewebsites.net/api/token", {
        method: "POST",
        body: JSON.stringify(credenciales),
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

      const responseJson = await response.json();
      console.log(responseJson);
      setEstaLogueado(responseJson?.token ? true : false);
    }
    
    login();

  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
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
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clientes">
                Clientes
              </NavLink>
            </li>
            {estaLogueado ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/salas">
                    Salas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/peliculas">
                    Peliculas
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/funciones">
                Funciones
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <NavLink className="btn btn-outline-success" to="/login">
              Log in
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
