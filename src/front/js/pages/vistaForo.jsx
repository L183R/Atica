import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { SocialGral } from "../component/socialGral.jsx";
import { LucroGral } from "../component/lucroGral.jsx";
import { useNavigate } from "react-router-dom";

export const VistaDeProyectos = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  function handleNewPost() {
		
    navigate("/"); //usamos navigate para redireccionar
  }

  return (
    <div>
      <div className="container">
        <div className="container testimonial-group">
          <div className="row text-center">
            {store.personajes.map((lobicho, index) => {
              return (
                <Cardper
                  nombres={lobicho.name}
                  ids={lobicho.uid}
                  tipo="personaje"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="row"></div>

      <div className="container">
        Planetas
        <div className="container testimonial-group">
          <div className="row text-center">
            {store.planetas.map((loplaneta, index) => {
              return (
                <Cardpla
                  nombres={loplaneta.name}
                  ids={loplaneta.uid}
                  tipo="planeta"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        Naves
        <div className="container testimonial-group">
          <div className="row text-center">
            {store.naves.map((lanave, index) => {
              return (
                <Cardnav
                  nombres={lanave.name}
                  ids={lanave.uid}
                  tipo="nave"
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
