import React, { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { DetailsProject } from "../component/detailsProject.jsx";
import { ComentariosProyecto } from "../component/comentariosProyecto";
import { useNavigate } from "react-router-dom";

export const ProjectDetailsView = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  return (
    <>
      <DetailsProject />
      <ComentariosProyecto />
    </>
  );
};
