import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.jsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NuevoPosteo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [malaCategory, setMalaCategory] = useState(0);
  const [malTitle, setMalTitle] = useState(0);
  const [malText, setMalText] = useState(0);
  const [malContact, setMalContact] = useState(0);
  const [image, setImage] = useState("");
  const [postImage, setPostImage] = useState("");
  const [loading, setLoading] = useState(false);
  

  // const [malaContraseña2, setMalaContraseña2] = useState(0);
  let category = "aa";
  let title = "aa";
  let text = "aa";
  let contact = "aa";


  function confirmaLaCosa(e) {
    e.preventDefault();
    if (category === "") {
      setMalaCategory(1);
    } else {
      setMalaCategory(0);
    }
    if (title === "") {
      setMalTitle(1);
    } else {
      setMalTitle(1);
    }
    if (text === "") {
      setMalText(1);
    } else {
      setMalText(1);
    }
    if (contact === "") {
      setMalContact(1);
    } else {
      setMalContact(1);
    }
    // submitImage();
    confirmaLaCosa2();
  }

  const submitImage=async(e)=>{
    const files = e.target.files;
    const data = new FormData()
    data.append("file",files[0])
    data.append("upload_preset","subirimagen")
    // data.append("cloud_name","ds6dug9me")
    const res = await fetch("https://api.cloudinary.com/v1_1/ds6dug9me/image/upload",{
      method:"POST",
      body: data
    });
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);

  }

  console.log(image);
  //   function todos(){
  //     confirmaLaCosa();
  //     submitImage();

  // }

  function confirmaLaCosa2() {
    if (
      malaCategory === 0 &&
      malTitle === 0 &&
      malText === 0 &&
      malContact === 0
    ) {
      actions.registrarProyecto(category, image, title, text, contact);
      // console.log("OK");
      // navigate("/vistaForo");
    }
  }

  return (
    <div className="form-body container">
      {store.auth === false ? (
        <Navigate to="/demo" />
      ) : (
        <form className="was-validated" onSubmit={confirmaLaCosa}>
          <div className="row">
            <div className="form-holder">
              <div className="form-content">
                <div className="form-items mt-3">
                  <h3 className="text-center">Crea tu nuevo proyecto</h3>
                  <p className="text-center">
                    Adjunta los datos indicados sobre el mismo en el siguiente
                    formulario:
                  </p>

                  <div className="card" style={{width: "18rem"}}>
                    <input className="form-control my-2" type="file" name="image" placeholder="Image" onChange={submitImage}/>
                    </div>

                  <div className="mb-3">
                    <label htmlFor="validacionTitulo" className="form-label">
                      Titulo
                    </label>
                    <input
                      className="form-control"
                      id="validacionTitulo"
                      placeholder="-----"
                      required
                      onChange={(e) => (title = e.target.value)}
                    />
                    <div className="invalid-feedback">
                      Este campo no puede estar vacío
                    </div>
                  </div>
                  {/* <div className="valid-feedback">Titulo field is valid!</div>
                    <div className="invalid-feedback">Username field cannot be blank!</div> */}
                </div>

                <div className="mb-3">
                  <label className="form-label">Categoría</label>
                  <select
                    className="form-select"
                    required
                    aria-label="select example"
                    onChange={(e) => (category = e.target.value)}
                  >
                    <option value="">
                      Selecciona la categoría de tu proyecto
                    </option>
                    <option value="Sin fines de lucro">
                      Sin fines de lucro
                    </option>
                    <option value="Con fines de lucro">
                      Con fines de lucro
                    </option>
                  </select>
                  <div className="invalid-feedback">
                    Selecciona una de las opciones
                  </div>
                </div>

                <div className="col-md-12 my-2">
                  <label className="form-label">Descripción</label>
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="Info sobre el proyecto"
                    required
                    onChange={(e) => (text = e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>

                <div className="col-md-12">
                  <label className="form-label">C</label>
                  <input
                    className="form-control"
                    type="text"
                    name="contact"
                    placeholder="Contacto"
                    required
                    onChange={(e) => (contact = e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>

                <div className="form-check mt-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label">
                    I confirm that all data are correct
                  </label>
                </div>
                <div className="form-button">
                  <button
                    id="submit"
                    type="submit"
                    className="btn btn-primary mt-3"
                  >
                    OK GO
                  </button>
                  <Link to="/vistaForo">
                    <button>
                      <i
                        className="fa fa-angle-double-left"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
