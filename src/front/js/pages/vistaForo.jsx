import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { SocialGral } from "../component/socialGral.jsx";
import { LucroGral } from "../component/lucroGral.jsx";
import { useNavigate } from "react-router-dom";
import { Prolist } from "../component/vistaproyectos.jsx";

export const VistaDeProyectos = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();
  useEffect(() => {
    actions.mostrarProjects();
  }, []);
  function handleNewPost() {
		
    navigate("/"); //usamos navigate para redireccionar
  }

  return (
    <div>
      <div className="container">
        <div className="container testimonial-group">

        <div className="ml-auto">
			<Link to="/nuevoposteoview">
    {" "}
        {store.auth === true ? (
            <button className="btn btn-primary" onClick={handleNewPost}>
        {" "}
            NewPost{" "}
            </button>
        ) : null}{" "}
		</Link>
			</div>
          <div className="row text-center">
            {store.projects.map((project, index) => {
              return (
                <Prolist
                  category={project.category}
                  dataTime={project.dataTime}
                  text={project.text}
                  title={project.title}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        </div></div>
  );
};
