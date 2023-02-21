import React, { Component, useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "..//..//styles/coments.css";

export const ComentariosProyecto = () => {
  const [coment, setComent] = useState("");
  const [list, setList] = useState([]);
  const { store, actions } = useContext(Context);
  const [input, setInput] = useState("");
  const [editando, setEditando] = useState("");
  const [editedComment, setEditedComment] = useState("");
  const params = useParams();
  let project_id = params.theid;
  let username = localStorage.getItem("user_username");
  let userid = localStorage.getItem("user_id");
  // console.log(store.comentarios);

  function cargarInput(e) {
    e.preventDefault(); // detenemos el comportamiento predeterminado para procesar nuestro codigo
    if (editando) {
      let text = "(editado)" + username + ": " + editedComment;
      let time = actions.editarPublicacion(text, editando);
      setEditando("");
      setEditedComment("");
    } else {
      let text = username + ": " + input;
      setInput("");
      actions.nuevoComentario(text, project_id);
    }
  }

  useEffect(() => {
    actions.traerComentarios(project_id);
  }, [store.comentarios]);

  return (
    <>
      <div className="cardindividual2 ">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className=" d-flex flex-column comment-section">
              <div className="p-2">
                <div className="d-flex flex-row user-info"></div>
                {/* ACÁ EMPIEZA EL FORMULARIO */}
                <div id="inputList" className="form-text">
                  <ul className="list-group">
                    {store.comentarios.map((comentario, index) => (
                      <div className="row" key={index}>
                        <li className="list-group-item col-12">
                          {editando === comentario.id ? (
                            <form onSubmit={cargarInput}>
                              <input
                                type="text"
                                className="form-control"
                                value={editedComment}
                                onChange={(e) =>
                                  setEditedComment(e.target.value)
                                }
                              />
                            </form>
                          ) : (
                            ""
                          )}
                          {comentario.text}
                        </li>
                        <div className="row">
                          <div className="col-8 text-dark">
                            <p>{comentario.dataTime}</p>
                          </div>
                          <div className="col-2">
                            {comentario.user_id == userid ? (
                              editando === comentario.id ? (
                                <button onClick={() => setEditando("")}>
                                  Cancelar
                                </button>
                              ) : (
                                <button
                                  onClick={() => setEditando(comentario.id)}
                                >
                                  Editar
                                </button>
                              )
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="col-2">
                            {comentario.user_id == userid ? (
                              <button
                                onClick={() =>
                                  actions.eliminarPublicacion(comentario.id)
                                }
                              >
                                Borrar
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
                <div className="d-flex flex-column justify-content-start ml-2">
                  <span className="d-block font-weight-bold name text-dark">
                    {username}
                  </span>
                </div>
                <form className="container" onSubmit={cargarInput}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="elInput"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        setInput(e.target.value);
                      }}
                      value={input}
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
