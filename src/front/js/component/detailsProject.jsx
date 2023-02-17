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
      <div className="cardindividual card d-flex justify-content-center col-10 mx-auto ">
        <img
          src={store.project.image}
          className="card-img-top"
          alt="cuatro manos sostienen una pieza de puzzle cada una"
        />
        <div className="card-body ">
          <h1 className="card-title text-light">{store.project.title}</h1> <h6 className="text-light">{store.project.category}</h6>
          <h3 className="card-text text-light">{store.project.text}
          </h3>
          <h5 className="text-light text-end">Contacto: {store.project.contact}</h5>
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
