import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Registro = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[nombre,setNombre]=useState("")
  const {store, actions}=useContext(Context)
  let password1 = "a"
  let password2 = "b"
  function enviarDatos(e) {
    e.preventDefault()
    actions.signup(email,password,nombre)

    setEmail("")
    setPassword("")
    setNombre("")
  }

  return (
    <>
    {store.auth === true ? <Navigate to="/login"/>:
    <form className="w-50 mx-auto" onSubmit={enviarDatos}>


<section className="register-photo">
      <div className="form-container">
        <form method="post">
          <h2 className="text-center">
            <strong>REGISTRO DE USUARIO</strong>
            <br />
          </h2>

          <div className="form-group">
          <input
          type="text"
          className="form-control"
          id="exampleInputNombre1"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
              placeholder="Usuario"
            />
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Email"
      />
          </div>

          <div className="form-group">
          <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        onChange={(e)=>password1=(e.target.value)}
        placeholder="Contraseña"
      />
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword2"
        onChange={(e)=>password2=(e.target.value)}
        placeholder="Confirmar contraseña"
      />
          </div>

          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" /> Estoy de
                acuerdo con los terminos y condiciones.
              </label>
            </div>
          </div>

          <div className="form-group">
            <button
              className="btn btn-registrar btn-block mb-3 col-12"
              type="submit"
            >
              Registrarse
            </button>
          </div>

          <div className="form-group">
            <button
              className="btn btn-registrar btn-block mb-3 col-12"
              type="submit"
            >
              Registrarse con Google
            </button>
          </div>

          <a className="already" href="# poner redireccion">
            Ya tienes una cuenta? Logueate aqui.
          </a>
        </form>
      </div>
    </section>

    </form>}
    </>

  );
};

export default Registro;