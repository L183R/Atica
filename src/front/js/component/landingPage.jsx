import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.tecnoredes.net.co/wp-content/resources/2017/10/conexiones-a-Internet-tecnoredes-colombia-1200x600.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
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
          <div class="carousel-item">
            <img
              src="https://s28461.pcdn.co/wp-content/uploads/2013/04/El-22-de-abril-es-el-di%CC%81a-de-la-Tierra.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>proyectos sociales</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
              <Link to="/SocialGral">
                <button className="btn btn-warning">IR</button>
              </Link>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://uploadgerencie.com/imagenes/emprendimiento.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
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
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
