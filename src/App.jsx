import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PageWithNavbar from "./pages/PageWithNavbar";

/* Nuevos nombres */
import MegahilosSAC from "./pages/MegahilosSAC";
import CasoParking from "./pages/CasoParking";

import PlanOro from "./pages/PlanOro";
import PlanBeta from "./pages/PlanBeta";
import PlanGamma from "./pages/PlanGamma";
import PlanDelta from "./pages/PlanDelta";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Página principal del portafolio */}
        <Route path="/Inicio" element={<PageWithNavbar />} />

        {/* Nuevos proyectos renombrados */}
        <Route path="/megahilos" element={<MegahilosSAC />} />
        <Route path="/caso-parking" element={<CasoParking />} />

        {/* Otros planes que no cambian */}
        <Route path="/plan-oro" element={<PlanOro />} />
        <Route path="/plan-beta" element={<PlanBeta />} />
        <Route path="/plan-gamma" element={<PlanGamma />} />
        <Route path="/plan-delta" element={<PlanDelta />} />
      </Routes>
    </>
  );
}

export default App;
