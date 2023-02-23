import React, { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { DetailsProject } from "../component/detailsProject.jsx";
import { ComentariosProyecto } from "../component/comentariosProyecto.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const ProjectDetailsView = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  return (
    <>
      <DetailsProject />
      <div>
      <Link to="/vistaForo">
        <button type="button" className="btn btnewpost">Volver al foro</button>
        </Link>
      </div>
      <ComentariosProyecto />
    </>
  );
};
