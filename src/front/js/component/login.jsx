
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.jsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
    {store.auth === true ? <Navigate to="/demo"/>:
        <form className="was-validated w-50 mx-auto" onSubmit={enviarDatos}>
            <div className="mb-3 container">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
    <input  type="email" className="form-control" id="exampleInputEmail1" placeholder="Required example textarea" aria-describedby="emailHelp" required value={email} onChange={(e) => setEmail(e.target.value)}/>
    <div className="invalid-feedback">
      
      Ingresa un correo válido.
    </div>
  </div>


  <div className="mb-3 container">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input  type="password" className="form-control" id="exampleInputPassword1" placeholder="Required example password" aria-describedby="emailHelp" required value={password} onChange={(e) => setPassword(e.target.value)}/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
}
    </>
  );
};
