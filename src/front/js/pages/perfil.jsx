import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { Perfilsup } from "../component/perfilsup.jsx";
import { Perfilmed } from "../component/perfilmed.jsx";
import { Perfilinf } from "../component/perfilinf.jsx";

export const Perfil = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.mostrarPerfil();
	  }, []);
	return (
		<>
		<Perfilsup/>
		<Perfilmed/>
		<Perfilinf/>
		<div className="container">
			<h4 className=""> Esta view la voy a usar para cosas 
			que posteriormente voy a tener que mover a views que todavía no están hechas</h4>


			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
		</>
	);
};
