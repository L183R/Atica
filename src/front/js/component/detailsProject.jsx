import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "..//..//styles/detailsProject.css";

export const DetailsProject = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  let paramid = params.theid;
  console.log("ID: " + paramid);

  function cartel1 () {
    alert("Hay que decidir que mierda hace esto.")
  }

  useEffect(() => {
    actions.traerProyecto(paramid);
  }, []);
  return (
    <>
      <div className="card d-flex justify-content-center col-10 mx-auto">
        <img
          src="https://img.freepik.com/fotos-premium/equipo-diverso-resolviendo-problema-juntos-debido-al-apoyo-trabajo-equipo-ayudandose-mutuamente-oficina-grupo-empresarios-armando-rompecabezas-colaborando-unidad_590464-78136.jpg?w=2000"
          className="card-img-top"
          alt="cuatro manos sostienen una pieza de puzzle cada una"
        />
        <div className="card-body ">
          <h5 className="card-title">{store.project.title}</h5>
          <p className="card-text">{store.project.text}
          </p>
          <h6 className="text-primary">Categoria: {store.project.category}</h6>
          <button type="button" className="btn btn-info lm-10" onClick={cartel1}>
            contacto
          </button>
          <Link to="/vistaForo">
            <button>
              <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            </button>
          </Link>
          {/* <button className="btn btn-light border-warning">💛</button> */}
        </div>
      </div>
    </>
  );
};
