import React from "react";
import { Link } from "react-router-dom";

export const Prolist = (props) => {
  return (
    <div className="proyectoindividual card col-11 25 text-light mb-3">
      <div className="card-body  text-light">
        <Link to={"/projectDetailsView/" + props.id}>
          <h5 className="card-title ">{props.title}</h5>
        </Link>
        <p className="card-text">{props.category}</p>
        <p className="card-text"> {props.text.substr(0, 80)}</p>
        <p className="card-text text-end">Fecha:{props.dataTime}</p>
      </div>
    </div>
  );
};
