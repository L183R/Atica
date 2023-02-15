import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const RecuperarContra = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  return (
    <div className="form-container">
      <form method="post">
        <h2 className="text-center">
          <strong>
            <u>RECUPERAR CONTRASEÑA</u>
          </strong>
          <br />
        </h2>

        <h4 className="text-center">
          Ingrese el correo con el que se ha registrado.
        </h4>
        {/* <!-- DIV CORREO ELECTRONICO --> */}
        <div className="form-group">
          <input
            className="form-control mb-3"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>

        {/* <!-- DIV DE BOTONES   --> */}
        <div className="form-group">
          <button
            className="btn btn-recuperar btn-block mb-3 col-12"
            type="submit"
          >
            Recuperar contraseña
          </button>
        </div>

        {/* TESTING */}

        {/* <!-- Boton de registro con google --> */}
        <div className="form-group">
          <button
            className="btn btn-recuperar btn-block mb-3 col-12"
            type="submit"
          >
            Salir
          </button>
        </div>

        <Link to="/login">
          {store.auth === false ? (
            <button className="already">
              Ya tienes cuenta? Inicia Sesion aqui.
            </button>
          ) : null}
        </Link>
      </form>
    </div>
  );
};
