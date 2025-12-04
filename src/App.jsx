import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PageWithNavbar from "./pages/PageWithNavbar";

/* Proyectos principales */
import MegahilosSAC from "./pages/MegahilosSAC";
import CasoParking from "./pages/CasoParking";
import CasoSamsung from "./pages/CasoSamsung";  // ← nuevo caso

/* Otros planes */
import PlanBeta from "./pages/PlanBeta";
import PlanGamma from "./pages/PlanGamma";
import PlanDelta from "./pages/PlanDelta";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Mostrar navbar excepto en "/" */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Página principal del portafolio */}
        <Route path="/Inicio" element={<PageWithNavbar />} />

        {/* Casos empresariales */}
        <Route path="/megahilos" element={<MegahilosSAC />} />
        <Route path="/caso-parking" element={<CasoParking />} />
        <Route path="/caso-samsung" element={<CasoSamsung />} />  {/* ← nueva ruta */}

        {/* Planes (que no son casos) */}
        <Route path="/plan-beta" element={<PlanBeta />} />
        <Route path="/plan-gamma" element={<PlanGamma />} />
        <Route path="/plan-delta" element={<PlanDelta />} />
      </Routes>
    </>
  );
}

export default App;
