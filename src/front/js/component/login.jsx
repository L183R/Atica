import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.jsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "..//../styles/formsstyle.css";
import "..//../styles/navbar.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  // useEffect(() => {
  //     actions.detallesPersonaje(params.theid)
  // }, [])
  function enviarDatos(e) {
    e.preventDefault();
    actions.login(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <>
      {store.auth === true ? (
        <Navigate to="/vistaForo" />
      ) : (
        // <div className="rounded bg-dark opacity-25">
        <div className="login">
          <form
            className="was-validated w-50 mx-auto rounded p-2 text-dark"
            onSubmit={enviarDatos}
          >
            <h1 className="text-light display-6 mt-2 text-center">
              Inicio de sesión
            </h1>
            <div className="registro2 mb-3 container ">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-light"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control bg-dark p-2 text-light bg-opacity-75"
                id="exampleInputEmail1"
                placeholder="Ingresa un correo electrónico válido"
                aria-describedby="emailHelp"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 container">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-light"
              >
                Contraseña
              </label>
              <input
                type="password"
                className="form-control bg-dark p-2 text-light bg-opacity-75"
                id="exampleInputPassword1"
                placeholder="Ingresa tu contraseña"
                aria-describedby="emailHelp"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-center mt-2">
                <Link to="/recuperarcontra">
                  <span className="navbar-brand mb-0">
                    {" "}
                    ¿Olvidaste tu contraseña?{" "}
                  </span>
                </Link>{" "}
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Iniciar sesion
              </button>
            </div>
          </form>
        </div>
        // </div>
      )}
    </>
  );
};
