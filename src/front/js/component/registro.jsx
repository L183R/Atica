import React from "react";
import { Link } from "react-router-dom";

export const Registro = () => {
  return (
    <section class="register-photo">
      <div class="form-container">
        <form method="post">
          <h2 class="text-center">
            <strong>REGISTRO DE USUARIO</strong>
            <br />
          </h2>

          <div class="form-group">
            <input
              class="form-control mb-3"
              type="text"
              name="Username"
              placeholder="Usuario"
            />
            <input
              class="form-control mb-3"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <div class="form-group">
            <input
              class="form-control mb-3"
              type="password"
              name="password"
              placeholder="Contraseña"
            />
            <input
              class="form-control"
              type="password"
              name="password"
              placeholder="Confirmar Contraseña"
            />
          </div>

          <div class="form-group">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" /> Estoy de
                acuerdo con los terminos y condiciones.
              </label>
            </div>
          </div>

          <div class="form-group">
            <button
              class="btn btn-registrar btn-block mb-3 col-12"
              type="submit"
            >
              Registrarse
            </button>
          </div>

          <div class="form-group">
            <button
              class="btn btn-registrar btn-block mb-3 col-12"
              type="submit"
            >
              Registrarse con Google
            </button>
          </div>

          <a class="already" href="# poner redireccion">
            Ya tienes una cuenta? Logueate aqui.
          </a>
        </form>
      </div>
    </section>
  );
};
