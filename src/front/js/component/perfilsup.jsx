import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "..//..//styles/detailsProject.css";

export const Perfilsup = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  let paramid = params.theid;
  let username = localStorage.getItem("user_username");
  return (
    <div className="cardindividual2">
      <div className="text-center pt-3">
        <h1 className="card-title text-dark ">{username}</h1>{" "}
      </div>
      {/* <div className="cardgeneral d-flex ">
        <div className="flex-shrink-0 align-middle pt-3">
          {store.project.image != "" ? (
            <img
              src={store.project.image}
              className="p-2 "
              style={{ width: "450px" }}
              alt=""
            />
          ) : (
            ""
          )}
          <div className=" flex-column mb-3 text-center">
            <a
              href={
                "https://api.whatsapp.com/send?phone=598" +
                store.project.contact
              }
              className="p-2"
            >
              <button type="button" className="p-2 btn btn-success">
                Contactar
              </button>
            </a>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Colaborar
              </button>
              <ul className="dropdown-menu">
                <li>
                  <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      value={total}
                      onChange={(e) => setTotal(e.target.value)}
                    ></input>
                    <span className="input-group-text">.00</span>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-danger mx-auto"
                    onClick={pagar}
                  >
                    Pagar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-grow-1 my-3 mx-2">
          <h3 className="card-text text-dark">{store.project.text}</h3>
        </div>
      </div> */}
    </div>
  );
};

