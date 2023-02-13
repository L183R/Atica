
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const NuevoPosteo = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const { store, actions } = useContext(Context);

let category = "";
let title = "";
let text = "";
let contact = "";

function confirmaProyecto(){
    actions.registrarProyecto(postCategoria, postTitulo, postDescripción, postContacto)
    }



return (
<div className="form-body container">
{store.auth === false ? (
        <Navigate to="/demo" />
      ) : (
    <form>
<div className="row">
    <div className="form-holder">
        <div className="form-content">
            
            <div className="form-items mt-3">
                <h3 className="text-center">Crea tu nuevo proyecto</h3>
                <p className="text-center">Adjunta los datos indicados sobre el mismo en el siguiente formulario:</p>

                {/* <div className="card" style={{width: "18rem"}}>
                    <input className="form-control my-2" accept="image/*" type="file" name="image" placeholder="Image" required/>
                    </div> */}

                    <div className="col-md-12">
                    <input className="form-control" type="text" name="title" placeholder="Titulo" required       onChange={(e) => (title = e.target.value)}/>
                    {/* <div className="valid-feedback">Titulo field is valid!</div>
                    <div className="invalid-feedback">Username field cannot be blank!</div> */}
                    </div>

                    <div className="col-md-12">
                    <div className="input-group mb-3">
                    <input className="form-control" type="text" name="categoria" placeholder="categoria" required onChange={(e) => (category = e.target.value)}/>
</div>
                        {/* <div className="valid-feedback">You selected a position!</div>
                        <div className="invalid-feedback">Please select a position!</div> */}
                </div>

                    <div className="col-md-12 my-2">
                        <input className="form-control" type="text" name="description" placeholder="Info sobre el proyecto" required onChange={(e) => (text = e.target.value)}/>
                        {/* <div className="valid-feedback">Email field is valid!</div>
                        <div className="invalid-feedback">Email field cannot be blank!</div> */}
                    </div>


                <div className="col-md-12">
                    <input className="form-control" type="text" name="contact" placeholder="Contacto" required onChange={(e) => (contact = e.target.value)}/>
                    {/* <div className="valid-feedback">Password field is valid!</div>
                    <div className="invalid-feedback">Password field cannot be blank!</div> */}
                </div>

                <div className="form-check mt-1">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label className="form-check-label">I confirm that all data are correct</label>
                {/* <div className="invalid-feedback">Please confirm that the entered data are all correct!</div> */}
                </div>
                    <div className="form-button">
                        <button id="submit" type="submit" className="btn btn-primary mt-3" onClick={confirmaProyecto}>Register</button>
                    </div>

            </div>
        </div>
    </div>
</div>
</form>
    )}
</div>

)};
