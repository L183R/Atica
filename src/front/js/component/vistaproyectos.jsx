import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const Prolist = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card m-1 col-11">
      <div className="card-body">
        <Link to={"/projectDetailsView/"+props.id}><h5 className="card-title text-dark">{props.title}</h5></Link>
        <p className="card-text">
          {props.category} Fecha:{props.dataTime}
        </p>
        <p className="card-text"> {props.text.substr(0, 80)}</p>
        {/* <Link to={"/personajes/"+ids} className="btn">A ver...</Link> */}
        {/* <button className={`btn ${store.favoritos.find(obj => obj.nombre === nombres) === undefined ? store.estilo1 : store.estilo2} m-3 col-3`} onClick={() => actions.agregarItem(nombres, ids, tipo)}><i className="fa fa-heart"/></button> */}
      </div>
    </div>
  );
};
