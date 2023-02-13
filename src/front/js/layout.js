import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo.jsx";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { ProjectsGral } from "./component/projectsGral.jsx";
import { Footer } from "./component/footer";
import { Logview } from "./pages/logview";
import { Login } from "./component/login.js";
import { ProjectDetailsView } from "./pages/projectDetailsView";
import { ComentariosProyecto } from "./component/comentariosProyecto";
import { Registro } from "./component/formregistro.jsx";
import { ViewRegistro } from "./pages/viewregistro.jsx";
import { NuevoPosteoView } from "./pages/nuevoposteoview.jsx";
import { NuevoPosteo } from "./component/newpost.jsx";
import { RecuperarContraview } from "./pages/recuperarcontraview.jsx";
import { RecuperarContra } from "./component/recuperarcontra.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route
              element={<ProjectDetailsView />}
              path="/projectDetailsView"
            />
            <Route
              element={<ComentariosProyecto />}
              path="/comentariosProyecto"
            />
            <Route element={<Demo />} path="/demo" />
            <Route element={<ProjectsGral />} path="/projectsGral" />
            <Route element={<Login />} path="/login" />
            <Route element={<Registro />} path="/registro" />
            <Route element={<NuevoPosteo />} path="/newpost" />
            <Route element={<Logview />} path="/logview" />
            <Route element={<RecuperarContra />} path="/recuperarcontra" />
            <Route
              element={<RecuperarContraview />}
              path="/recuperarcontraview"
            />
            <Route
              element={<ProjectDetailsView />}
              path="/projectDetailsView"
            />
            <Route element={<ViewRegistro />} path="/signup" />
            <Route element={<NuevoPosteoView />} path="/nuevoposteoview" />

            <Route path="/signup" element={<ViewRegistro />} />

            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
