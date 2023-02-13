import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h4 className=""> Esta view la voy a usar para cosas 
			que posteriormente voy a tener que mover a views que todavía no están hechas.</h4>

			<Link to="/nuevoposteoview">
				<button className="btn btn-primary">New Post</button>
			</Link>

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
