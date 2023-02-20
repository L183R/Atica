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
  // let total = 10;
  const [total, setTotal] = useState(0);

  const pagar = async () => {
    console.log("funciona");
    console.log(total);
    await actions.pagoMercadoPago(parseInt(total));
    console.log(store.mercadoPago);
    let direccion = await store.mercadoPago.init_point; // direccion guarda la url que trae init_point
    console.log(direccion);
    window.location.replace(direccion); // window es para renderizar y mandar al cliente a la url de pagar
  };

  useEffect(() => {
    actions.traerProyecto(paramid);
  }, []);
  return (
    <>
      <div className="cardindividual card d-flex justify-content-center col-10 mx-auto ">
        {store.project.image != "" ? (
          <img
            src={store.project.image}
            className="card-img-top"
            alt="cuatro manos sostienen una pieza de puzzle cada una"
          />
        ) : (
          ""
        )}
        <div className="card-body ">
          <h1 className="card-title text-light">{store.project.title}</h1>{" "}
          <h6 className="text-light">{store.project.category}</h6>
          <h3 className="card-text text-light">{store.project.text}</h3>
          <a
            href={
              "https://api.whatsapp.com/send?phone=598" + store.project.contact
            }
          >
            <button type="button" class="btn btn-success">
              Acá va el logo de whatsapp
            </button>
          </a>
          <Link to="/vistaForo">
            <button>
              <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            </button>
          </Link>
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
    </>
  );
};
