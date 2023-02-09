import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom"; // importamos el hook useNavigate para redireccionar desde una funcion

export const Navbar = () => {

	const{store, actions}=useContext(Context)
	const navigate = useNavigate() //activamos useNavigate

	function handleLogout() {
		actions.logout()//cerrar la sesion
		navigate("/")//usamos navigate para redireccionar

	}

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1"> ÁTICA c:</span>
        </Link>
          <div className="mx-1">
          <Link to="/login">
            <button className="btn btn-primary">Iniciar Sesión</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-primary">Registrarse</button>
          </Link>
        </div>
        <div className="ml-auto">
				{store.auth === true? <button className="btn btn-primary" onClick={handleLogout}>Logout</button> : null}
			</div>
      </div>
    </nav>
  );
};
