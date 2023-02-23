import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/landing.css";

export const LandingPage = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="imagenlanding carousel-item active">
            <img
              src="https://blog.trello.com/hs-fs/Foster_Productivity_And_Collaboration_With_A_Strong_Team_Structure.png"
              className=" imaginacion d-block w-100"
              alt="dibujo fondo violeta con planetas robots y personas"
              style={{ width: "100%" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <Link to="/vistaForo">
                <button className="botonhome my-2">Ver Proyectos</button>
              </Link>
              <p>
                Ática es un foro para presentar proyectos y ponerse en contacto
                con colaboradores que estén interesados en ayudar para llevarlos
                a cabo. Busca favorecer el desarrollo social, cultural y
                económico, autogestionado e independiente de cualquier otro
                poder que no sea la democracia.
              </p>
              <p>
                "El que no considera lo que tiene como la riqueza más grande, es
                desdichado, aunque sea dueño del mundo". — Epicuro
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/Ghx5600G/Logo-con-fondo-rosa.png"
              className="imaginacion d-block w-100"
              alt="cuatro personas sonrien y unen sus manos en senial de exito"
              style={{ width: "100%" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>PROYECTOS SOCIALES</h2>
              <p>
                Un espacio diseñado para fomentar proyectos que satisfagan las
                necesidades desatendidas de la sociedad. Nadie conoce mejor las
                necesidades del pueblo que él mismo, así que el pueblo propone y
                el pueblo dispone.
              </p>
              <p>
                "Recibir sin orgullo, desprenderse sin apego" - Marco Aurelio
              </p>
              <Link to="/vistaForo">
                <button className="botonhome">Ver Proyectos</button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/vHsKPYKG/Logo-con-fondo-celeste.png"
              className="imaginaciond-block w-100"
              alt="figura de un hombre con traje sosteniendo una lampara que encierra un signo de pesos "
              style={{ width: "100%" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>PROYECTOS EMPRENDEDORES</h2>
              <p>
                Un espacio diseñado para fomentar proyectos que satisfagan las
                necesidades desatendidas de la sociedad. Nadie conoce mejor las
                necesidades del pueblo que él mismo, así que el pueblo propone y
                el pueblo dispone.
              </p>
              <p>
                "Recibir sin orgullo, desprenderse sin apego" - Marco Aurelio
              </p>
              <Link to="/vistaForo">
                <button className="botonhome">Ver Proyectos</button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </>
  );
};
