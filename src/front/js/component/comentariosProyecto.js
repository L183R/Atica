import React, { Component, useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "..//..//styles/coments.css";

export const ComentariosProyecto = () => {
  const [coment, setComent] = useState("");
  const [list, setList] = useState([]);

  const DeleteItems = (indexItem) => {
    setList((prevState) =>
      prevState.filter((listItems, index) => index !== indexItem)
    );
  };

  function enviarDatos(e) {
    e.preventDefault();
    setList([...list, coment]);
    setComent("");
  }
  console.log(list);

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="d-flex flex-column comment-section">
              <div className="bg-white p-2">
                <div className="d-flex flex-row user-info">
                  <img
                    className="rounded-circle"
                    src="https://i.imgur.com/RpzrMR2.jpg"
                    width="40"
                  />
                  <div className="d-flex flex-column justify-content-start ml-2">
                    <span className="d-block font-weight-bold name">
                      Fulanito confucio
                    </span>
                    <span className="date text-black-50">
                      Shared publicly - Jan 2020
                    </span>
                  </div>
                </div>

                {list.map((item, index) => (
                  <div className="mt-2">
                    <div className="card d-flex">
                      <div class="card-body">
                        <li id="lista">
                          <div class="card-body" key={index}>
                            {item}
                            <button
                              type="button"
                              className="btn link-danger float-end"
                              onClick={() => DeleteItems(index)}
                            >
                              eliminar
                            </button>
                          </div>
                        </li>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white">
                <div className="d-flex flex-row fs-12">
                  <div className="like p-2 cursor">
                    <i className="fa fa-thumbs-o-up"></i>
                    <span className="ml-1">Like</span>
                  </div>
                  <div className="like p-2 cursor">
                    <i className="fa fa-commenting-o"></i>
                    <span className="ml-1">Comment</span>
                  </div>
                  <div className="like p-2 cursor">
                    <i className="fa fa-share"></i>
                    <span className="ml-1">Share</span>
                  </div>
                </div>
              </div>
              <div className="bg-light p-2">
                <div className="d-flex flex-row align-items-start">
                  <img
                    className="rounded-circle"
                    src="https://i.imgur.com/RpzrMR2.jpg"
                    width="40"
                  />
                  <textarea
                    type="text"
                    className="input m-1 w-75"
                    value={coment}
                    id="exampleInput"
                    aria-describedby="inputHelp"
                    onChange={(e) => {
                      setComent(e.target.value);
                    }}
                    placeholder="No hay coments, añadir coments"
                  ></textarea>
                </div>
                <div className="mt-2 text-right">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                    onChange={(e) => {
                      setList(e.target.value);
                    }}
                    onClick={enviarDatos}
                  >
                    Post comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
