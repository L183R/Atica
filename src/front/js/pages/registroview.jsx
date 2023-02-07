import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Registro } from "../component/registro.jsx";

export const Registroview = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <Registro />
    </div>
  );
};
