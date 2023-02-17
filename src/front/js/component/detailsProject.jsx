import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "..//..//styles/detailsProject.css";

export const DetailsProject = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  let paramid = params.theid;
  console.log("ID: " + paramid);

  function cartel1 () {
    alert("Hay que decidir que mierda hace esto.")
  }

  useEffect(() => {
    actions.traerProyecto(paramid);
  }, []);
  return (
    <>
      <div>

      </div>
    </>
  );
};
