import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
          <div className="carousel-item active">
            <img
              src="https://studio.uxpincdn.com/studio/wp-content/uploads/2021/07/9-Design-Thinking-Tools.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>ATICA</h1>
              {/* <Link to="/projectsGral">
                <button>VER PROYECTOS</button>
              </Link> */}
              <p>
              Ática es un foro para presentar proyectos y ponerse en contacto con colaboradores que estén interesados en ayudar para llevarlos a cabo. Busca favorecer el desarrollo social, cultural y económico, autogestionado e independiente de cualquier otro poder que no sea la democracia.
              </p>
              <p>"El que no considera lo que tiene como la riqueza más grande, es desdichado, aunque sea dueño del mundo". — Epicuro
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://proyectolabor.es/wp-content/uploads/2019/02/trabaja-en-proyecto-labor.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>PROYECTOS SOCIALES</h2>
              <p>
                Un espacio diseñado para fomentar proyectos que satisfagan las necesidades desatendidas de la sociedad. Nadie conoce mejor las necesidades del pueblo que él mismo, así que el pueblo propone y el pueblo dispone.
              </p>
              <p>"Recibir sin orgullo, desprenderse sin apego" - Marco Aurelio</p>
              <Link to="/SocialGral">
                <button className="btn btn-warning">IR</button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://uploadgerencie.com/imagenes/emprendimiento.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>proyectos con fines de lucro</h1>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              <Link to="/LucroGral">
                <button className="btn btn-warning">IR</button>
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
          <span className="visually-hidden">Previous</span>
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
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
