import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../../front/styles/index.css";

import { Home } from "./pages/home.jsx";
import injectContext from "./store/appContext.jsx";
import { Navbar } from "./component/navbar.jsx";
import { LandingPage } from "./component/landingPage.jsx";
import { Footer } from "./component/footer";
import { Login } from "./component/login.jsx";
import { ProjectDetailsView } from "./pages/projectDetailsView.jsx";
import { ComentariosProyecto } from "./component/comentariosProyecto.jsx";
import { Registro } from "./component/formregistro.jsx";
import { ViewRegistro } from "./pages/viewregistro.jsx";
import { SocialGral } from "./component/socialGral.jsx";
import { LucroGral } from "./component/lucroGral.jsx";
import { VistaDeProyectos } from "./pages/vistaForo.jsx";
import { NuevoPosteoView } from "./pages/nuevoposteoview.jsx";
import { Perfil } from "./pages/perfil.jsx";
import { NuevoPosteo } from "./component/newpost.jsx";
import { RecuperarContraview } from "./pages/recuperarcontraview.jsx";
import { RecuperarContra } from "./component/recuperarcontra.jsx";
import { Perfilsup } from "./component/perfilsup.jsx";
import { Perfilmed } from "./component/perfilmed.jsx";
import { Perfilinf } from "./component/perfilinf.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div className="todo">
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
            <Route element={<LucroGral />} path="/lucroGral" />
            <Route element={<SocialGral />} path="/socialGral" />
            <Route element={<VistaDeProyectos />} path="/vistaForo" />
            <Route element={<LandingPage />} path="/landingPage" />
            <Route element={<Login />} path="/login" />
            <Route element={<Registro />} path="/registro" />
            <Route element={<NuevoPosteo />} path="/newpost" />
            <Route element={<Login />} path="/logview" />
            <Route element={<RecuperarContra />} path="/recuperarcontra" />
            <Route element={<Perfil />} path="/perfil/:theid" />
            <Route
              element={<RecuperarContraview />}
              path="/recuperarcontraview"
            />
            <Route
              element={<ProjectDetailsView />}
              path="/projectDetailsView/:theid"
            />
            <Route element={<ViewRegistro />} path="/signup" />
            <Route element={<NuevoPosteoView />} path="/nuevoposteoview" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
