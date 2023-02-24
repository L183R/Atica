import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "..//../styles/formsstyle.css";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const { store, actions } = useContext(Context);
  const [malUsuario, setMalUsuario] = useState(0);
  const [malCorreo, setMalCorreo] = useState(0);
  const navigate = useNavigate();
  const [malaContraseña1, setMalaContraseña1] = useState(0);
  const [malaContraseña2, setMalaContraseña2] = useState(0);
  let usuario = "";
  let correo = "";
  let contraseña1 = "";
  let contraseña2 = "";

  // function enviarDatos(e) {
  //   e.preventDefault();
  //   actions.signup(email, password, nombre);
  //   setEmail("");
  //   setPassword("");
  //   setNombre("");
  // }

  function confirmaLaCosa() {
    if (usuario.length < 5) {
      // setMalUsuario(() => 1);
      setMalUsuario(1);
    } else if (usuario.length > 20) {
      setMalUsuario(2);
    } else {
      setMalUsuario(0);
    }
    if (contraseña1.length < 8) {
      setMalaContraseña1(1);
    } else if (contraseña1.length > 20) {
      setMalaContraseña1(2);
    } else {
      setMalaContraseña1(0);
    }
    if (contraseña1 !== contraseña2) {
      setMalaContraseña2(1);
    } else {
      setMalaContraseña2(0);
    }
    confirmaLaCosa2();
  }

  function confirmaLaCosa2() {
    if (
      malUsuario === 0 &&
      malCorreo === 0 &&
      malaContraseña1 === 0 &&
      malaContraseña2 === 0
    ) {
      actions.signup(usuario, contraseña1, correo);
      navigate("/logview");
    }
  }

  return (
    <>
      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="login mx-auto">
            <form className=" was-validated w-50 mx-auto rounded p-2 text-center">
              <h1 className="display-6 mt-2 text-center">Registro</h1>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <b>Nombre de usuario</b>
              </label>
              <input
                className="form-control mb-1"
                type="text"
                placeholder="Nombre de usuario"
                onChange={(e) => (usuario = e.target.value)}
                aria-label="default input example"
                aria-describedby="emailHelp"
                required
              />
              {malUsuario == 1 ? (
                <label className="Male sal">
                  El nombre de usuario debe tener al menos 5 caracteres
                </label>
              ) : (
                ""
              )}
              {malUsuario == 2 ? (
                <label className="Male sal">
                  El nombre de usuario debe tener menos de 20 caracteres
                </label>
              ) : (
                ""
              )}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <b>Correo electrónico</b>
              </label>
              <input
                type="email"
                onChange={(e) => (correo = e.target.value)}
                className="form-control mb-1"
                id="inputEmail"
                placeholder="name@example.com"
                aria-describedby="emailHelp"
                required
              ></input>
              {malCorreo == 1 ? (
                <label className="Male sal">
                  La dirección de correo deberá ser válida
                </label>
              ) : (
                ""
              )}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <b>Contraseña</b>
              </label>
              <input
                type="password"
                className="form-control mb-1"
                onChange={(e) => (contraseña1 = e.target.value)}
                id="inputPassword1"
                aria-describedby="emailHelp"
                required
              ></input>
              {malaContraseña1 == 1 ? (
                <label className="Male sal">
                  La contraseña debe tener al menos 8 caracteres
                </label>
              ) : (
                ""
              )}
              {malaContraseña1 == 2 ? (
                <label className="Male sal">
                  La contraseña debe tener menos de 20 caracteres
                </label>
              ) : (
                ""
              )}
              {malaContraseña1 == 3 ? (
                <label className="Male sal">
                  La contraseña debe tener al menos una letra minúscula
                </label>
              ) : (
                ""
              )}
              {malaContraseña1 == 4 ? (
                <label className="Male sal">
                  La contraseña debe tener al menos una letra mayúscula
                </label>
              ) : (
                ""
              )}
              {malaContraseña1 == 5 ? (
                <label className="Male sal">
                  La contraseña debe tener al menos un número
                </label>
              ) : (
                ""
              )}
              {malaContraseña1 == 6 ? (
                <label className="Male sal">
                  La contraseña debe tener al menos un caracter especial
                </label>
              ) : (
                ""
              )}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <b> Confirmar contraseña </b>
              </label>
              <input
                type="password"
                className="form-control mb-1"
                onChange={(e) => (contraseña2 = e.target.value)}
                id="inputPassword2"
                aria-describedby="emailHelp"
                required
              ></input>
              {malaContraseña2 == 1 ? (
                <label className="Male sal">
                  Las contraseñas deben coincidir
                </label>
              ) : (
                ""
              )}
              <button
                type="button"
                className="botonlogenviar btn btn-primary mt-1"
                onClick={confirmaLaCosa}
              >
                Enviar
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Registro;
