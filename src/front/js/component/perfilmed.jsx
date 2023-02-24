import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "..//..//styles/detailsProject.css";

export const Perfilmed = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  let paramid = params.theid;
  return (
    <>
    <h1>PERFIL MEDIO</h1>
    </>
  )
};

