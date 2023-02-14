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
    <>
    
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

        <Link to="/vistaForo">
        <button className="btn btn-primary">Ver Proyectos</button>
      </Link>

    <SocialGral />
    <LucroGral />
    </>
  );
};
