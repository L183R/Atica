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
    <>
      <nav className="navbar m-0 p-0">
        <div className="container d-flex justify-content-between">
          <div className="d-flex justify-content-start">
            <div className="mx-1">
              <Link to="/logview">
                {" "}
                {store.auth === false ? (
                  <button
                    className="botonnavlog btn btn-sm text-light"
                    id="login"
                    style={{ opacity: 1 }}
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
                    className="botonnavlog btn btn-sm text-light"
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
                  className="botonnavlog btn btn-sm text-light"
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
    </>
  );
};
