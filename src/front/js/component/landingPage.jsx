import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
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
              <h1>ATICA explicacion</h1>
              {/* <Link to="/projectsGral">
                <button>VER PROYECTOS</button>
              </Link> */}
              <h2>conoce nuestros proyectos</h2>
              <p>
                ESTO VAS MAS ARRIBA DESPUES LO CAMBIARIA Si tu viejo es zapatero
                Zarpale la lata, se se Zarpale la lata! Y las manitos ahi, ahi,
                ahi, ahi y ahi. Supermerk2, Supermerk2 Y ahora. suena el
                "rototo" Suena el "rototo" !!! Salto la ficha en el barrio,
                Todos los pibes me andan buscando. Ya se enteraron que anoche me
                rastree. De la casa del zapatero, Una lata de p.v.c
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://s28461.pcdn.co/wp-content/uploads/2013/04/El-22-de-abril-es-el-di%CC%81a-de-la-Tierra.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>proyectos sociales</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
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
