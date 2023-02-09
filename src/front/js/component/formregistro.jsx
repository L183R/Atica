import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const { store, actions } = useContext(Context);
  const [malUsuario, setMalUsuario] = useState("");
  const [malCorreo, setMalCorreo] = useState("");
  const [malaContraseña1, setMalaContraseña1] = useState("");
  const [malaContraseña2, setMalaContraseña2] = useState("");
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
      setMalUsuario(() => 1);
    } else if (usuario.length > 20) {
      setMalUsuario(() => 2);
    } else {
      setMalUsuario(() => 0);
    }
    if (contraseña1.length < 8) {
      setMalaContraseña1(() => 1);
    } else if (contraseña1.length > 20) {
      setMalaContraseña1(() => 2);
    } else {
      setMalaContraseña1(() => 0);
    }
    if (contraseña1 != contraseña2) {
      setMalaContraseña2(() => 1);
    }else {
      setMalaContraseña2(() => 0);
    }
    if (malUsuario==0 && malCorreo==0 && malaContraseña1==0 && malaContraseña2==0 )
    {store.actions.signup(usuario, contraseña1, correo)}
  }


  return (
<>
{store.auth === true ? (
        <Navigate to="/demo" />
      ) : (
      <form>
        <div className="row text-center">
          <div className="col-4">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nombre de usuario
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Nombre de usuario"
                onChange={(e) => (usuario = e.target.value)}
                aria-label="default input example"
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
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                onChange={(e) => (correo = e.target.value)}
                className="form-control"
                id="inputEmail"
                placeholder="name@example.com"
              ></input>
              {malCorreo == 1 ? (
                <label className="Male sal">
                  La dirección de correo deberá ser válida
                </label>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => (contraseña1 = e.target.value)}
                id="inputPassword1"
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
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => (contraseña2 = e.target.value)}
                id="inputPassword2"
              ></input>
              {malaContraseña2 == 1 ? (
                <label className="Male sal">
                  Las contraseñas deben coincidir
                </label>
              ) : (
                ""
              )}
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={confirmaLaCosa}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
      )}
    </>
  );
};

export default Registro;