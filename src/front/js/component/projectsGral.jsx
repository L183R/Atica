import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { DetailsProject } from "./detailsProject.js";
import { ProjectDetailsView } from "../pages/projectDetailsView.js";

export const ProjectsGral = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Proyectos Sociales
          </button>
          <button
            className="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Proyectos con fines de lucro
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabIndex="0"
          >
            {/* DIVISION */}
            {/* ... */}
            {/* FIN DIVISION  */}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabIndex="0"
          >
            {/* DIVISION */}
            ...
            {/* FIN DIVISION  */}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-disabled"
            role="tabpanel"
            aria-labelledby="v-pills-disabled-tab"
            tabIndex="0"
          >
            {/* DIVISION  */}
            ...
            {/* FIN DIVISION  */}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
            tabIndex="0"
          >
            {/* DIVISION */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* CARTA */}
              <div className="col">
                <div className="card h-100">
                  <img
                    src="http://images7.memedroid.com/images/UPLOADED716/622c677ad5fa4.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <Link to="/ProjectDetailsView">
                      <button className="btn btn-warning">Details</button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* FIN CARTA */}
            </div>

            {/* FIN DIVISION */}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
            tabIndex="0"
          >
            {/* DIVSION */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img
                    src="https://cdn.upsocl.com/wp-content/uploads/2017/01/angry-cat-photography-02-5874a28aee900__700-2.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <Link to="/ProjectDetailsView">
                      <button className="btn btn-warning">Details</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col"></div>
            </div>
            {/* FIN DIVISION  */}
          </div>
        </div>
      </div>
    </>
  );
};
