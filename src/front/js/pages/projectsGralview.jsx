import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { DetailsProject } from "../component/detailsProject.js";
import { ComentariosProyecto } from "../component/comentariosProyecto";
import { ProjectsGral } from "../component/projectsGral.jsx";

export const ProjectDetailsView = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <ProjectsGral />
    </>
  );
};
