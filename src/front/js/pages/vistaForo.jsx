import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import { SocialGral } from "../component/socialGral.jsx";
import { LucroGral } from "../component/lucroGral.jsx";
import { useNavigate } from "react-router-dom";
import { Prolist } from "../component/vistaproyectos.jsx";

export const VistaDeProyectos = () => {
  const { store, actions } = useContext(Context);

  let buscar1 = "";

  function preBuscar(){
      store.buscar= buscar1,

      console.log("Buscar: "+store.buscar)
    actions.buscarProyectos()

  };

  const navigate = useNavigate();
  useEffect(() => {
    actions.mostrarProjects();
  }, []);
  function handleNewPost() {
    navigate("/"); //usamos navigate para redireccionar
  }

  return (
    <div className="mx-auto">
      <div className="container mx-auto">
        <div className="container testimonial-group">
          <div className="d-flex justify-content-center">
            {store.auth === true ? (
              <Link to="/nuevoposteoview">
                {" "}
                <button
                  className="btnewpost btn btn-primary"
                  onClick={handleNewPost}
                >
                  {" "}
                  NewPost{" "}
                </button>
              </Link>
            ) : null}{" "}
            <button
              className="btnewpost btn btn-primary m-2"
              onClick={actions.mostrarProjects}
            >
              {" "}
              Todos{" "}
            </button>
            <button
              className="btnewpost btn btn-primary m-2"
              onClick={actions.mostrarProjects2}
            >
              {" "}
              Sin fines de lucro{" "}
            </button>
            <button
              className="btnewpost btn btn-primary m-2"
              onClick={actions.mostrarProjects1}
            >
              {" "}
              Con fines de lucro{" "}
            </button>
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Buscar"
                aria-label="default input example"
                onChange={(e) => (buscar1 = e.target.value)}
              ></input>
              <button
                className="btn btn-success"
                onClick={preBuscar}
              >
                Buscar
              </button>
            </div>
          </div>
          <div className="cartalistaproyect row text-center mt-3 ">
            {store.projects.map((project, index) => {
              return (
                <Prolist
                  category={project.category}
                  dataTime={project.dataTime}
                  text={project.text}
                  title={project.title}
                  id={project.id}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
