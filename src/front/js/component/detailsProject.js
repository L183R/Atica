import React, { Component, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "..//..//styles/detailsProject.css";
import { ProjectsGral } from "./projectsGral.jsx";

export const DetailsProject = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <div className="card d-flex justify-content-center w-50 mx-auto">
        <img
          src="https://img.freepik.com/fotos-premium/equipo-diverso-resolviendo-problema-juntos-debido-al-apoyo-trabajo-equipo-ayudandose-mutuamente-oficina-grupo-empresarios-armando-rompecabezas-colaborando-unidad_590464-78136.jpg?w=2000"
          className="card-img-top"
          alt="cuatro manos sostienen una pieza de puzzle cada una"
        />
        <div className="card-body ">
          <h5 className="card-title">Titulo del Projecto</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisci tempor incidunt ut
            labore et dolore magna aliqua veniam, quis nostrud exercitation
            ullamcorpor s commodo consequat. Duis autem vel eum irrure esse
            molestiae consequat, vel illum dolore eu fugi et iusto odio
            dignissim qui blandit praesent luptat exceptur sint occaecat
            cupiditat non provident, deserunt. mollit anim id est laborum et
            dolor fuga distinct. Nam liber tempor cum soluta nobis elige quod
            maxim placeat facer possim omnis volupt
          </p>
          <h6 className="text-primary">Categoria:</h6>
          <button type="button" className="btn btn-info lm-10">
            contacto
          </button>
          <Link to="/projectsGral">
            <button>
              <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            </button>
          </Link>
          <button className="btn btn-light border-warning">💛</button>
        </div>
      </div>
    </>
  );
};
