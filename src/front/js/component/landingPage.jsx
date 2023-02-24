import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/landing.css";

export const LandingPage = () => {
  return (
    <>
      <div className="escondido">
        <div className="card text-bg-dark">
          <img
            src="https://i.postimg.cc/d0XpZd6d/logo-con-fondo-verde.png"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Atica</h5>
            <p className="card-text">
              Atica es un foro para presentar proyectos y ponerse en contacto
              con posibles colaboradores.
            </p>
            <Link to="/vistaForo">
              <button className=" btn-background-subtle">Ver Proyectos</button>
            </Link>
          </div>
        </div>
        {/* segunda */}
        <div className="card text-bg-dark">
          <img
            src="https://i.postimg.cc/vHsKPYKG/Logo-con-fondo-celeste.png"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Proyectos Sociales</h5>
            <p className="card-text">
              Un espacio diseñado para fomentar proyectos que satisfagan las
              necesidades sociales.
            </p>
            <Link to="/vistaForo">
              <button className="btn-background-subtle">Ver Proyectos</button>
            </Link>
          </div>
        </div>
        {/* tercer */}
        <div className="card text-bg-dark">
          <img
            src="https://i.postimg.cc/vHsKPYKG/Logo-con-fondo-celeste.png"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Proyectos Emprendedores</h5>
            <p className="card-text">
              Un espacio diseñado para fomentar la creación de proyectos
              empresariales que generen un crecimiento económico.
            </p>
            <Link to="/vistaForo">
              <button className=" btn-background-subtle">Ver Proyectos</button>
            </Link>
          </div>
        </div>
      </div>

      {/* termina */}
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
              src="https://i.postimg.cc/vHsKPYKG/Logo-con-fondo-celeste.png"
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
                con personas que estén interesadas en colaborar para llevarlos a
                cabo. Busca favorecer el desarrollo social, cultural y
                económico, autogestionado e independiente.
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
                necesidades de la sociedad. Nadie conoce mejor las necesidades
                del pueblo como él mismo, así que el pueblo propone y el pueblo
                dispone.
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
                Un espacio diseñado para fomentar la creación de proyectos
                empresariales que generen riqueza y crecimiento económico.
                Sabemos que una idea de negocio puede surgir en cualquier
                momento, aquí brindamos la oportunidad de presentarla, encontrar
                colaboradores interesados en invertir y apoyar su desarrollo.
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
