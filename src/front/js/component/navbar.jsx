import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { useNavigate } from "react-router-dom"; // importamos el hook useNavigate para redireccionar desde una funcion
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate(); //activamos useNavigate

  function handleLogout() {
    actions.logout(); //cerrar la sesion
    navigate("/"); //usamos navigate para redireccionar
  }

  function prueba_la_cosa() {
    alert(store.user_username);
  }

  return (
    <nav className="navbar">
      {/* <button btn-sm onClick={prueba_la_cosa}>
        Prueba cosas
      </button> */}
      <div className="container container d-flex justify-content-between">
        <div className="d-flex justify-content-start">
          {/* <Link to="/">
            <span className="navbar-brand mb-0 h1"> ÁTICA c: </span>
          </Link>{" "} */}
          {/* <Link to="/recuperarcontra">
            <button
              type="submit"
              className="btn btn-sm btn-primary"
              id="recucontra"
            >
              {" "}
              Recuperar Contraseña{" "}
            </button>{" "}
          </Link>{" "} */}
          <div className="mx-1">
            <Link to="/login">
              {" "}
              {store.auth === false ? (
                <button
                  className="botonnavlog btn btn-sm"
                  id="login"
                  style={{ color: "white" }}
                >
                  {" "}
                  Iniciar Sesión{" "}
                </button>
              ) : null}{" "}
            </Link>{" "}
            <Link to="/signup">
              {" "}
              {store.auth === false ? (
                <button
                  className="botonnavlog btn btn-sm"
                  id="registrar"
                  style={{ color: "white" }}
                >
                  {" "}
                  Registrarse{" "}
                </button>
              ) : null}{" "}
            </Link>{" "}
          </div>{" "}
          <div className="ml-auto">
            {" "}
            {store.auth === true ? (
              <button
                id="logout"
                className="btn btn-sm"
                style={{ color: "white" }}
                onClick={handleLogout}
              >
                {" "}
                Logout{" "}
              </button>
            ) : null}{" "}
          </div>{" "}
        </div>
      </div>{" "}
    </nav>
  );
};
