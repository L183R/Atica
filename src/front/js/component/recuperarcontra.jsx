import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

export const RecuperarContra = () => {
  const [email, setEmail] = useState("");
  const { actions } = useContext(Context);

  function recoverpassword() {
    actions.recuperarContra(email);
    setEmail("");
  }

  return (
    <div className="recuperarcontraseña form-container mx-auto">
      <div>
        {/* <form> */}
        <h3 className="text-center">
          <b>
            <h1 className="display-6 mt-2 text-center">
              Recuperación de contraseña
            </h1>
          </b>
        </h3>
        <h5>
          <b>Ingrese el correo con el que se ha registrado.</b>
        </h5>

        {/* <!-- DIV CORREO ELECTRONICO --> */}
        <div className="form-group">
          <input
            className="form-control mb-3 mt-2"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
          />
        </div>

        {/* <!-- DIV DE BOTONES   --> */}
        <div className="form-group mx-5">
          <button
            className="botonnavlog btn btn-sm text-light"
            /*    type="submit" */
            onClick={() => recoverpassword()}
          >
            Recuperar contraseña
          </button>
        </div>

        <div className="form-group mt-2">
          <Link to="/logview">
            <button className="botonnavlog btn btn-sm text-light" type="submit">
              Salir
            </button>
          </Link>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
