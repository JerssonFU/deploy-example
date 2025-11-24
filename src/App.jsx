import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PageWithNavbar from "./pages/PageWithNavbar";

import PlanBronce from "./pages/PlanBronce";
import PlanPlata from "./pages/PlanPlata";
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
        <Route path="/" element={<Home />} />
        <Route path="/Inicio" element={<PageWithNavbar />} />

        {/* Rutas nuevas */}
        <Route path="/plan-bronce" element={<PlanBronce />} />
        <Route path="/plan-plata" element={<PlanPlata />} />
        <Route path="/plan-oro" element={<PlanOro />} />
        <Route path="/plan-beta" element={<PlanBeta />} />
        <Route path="/plan-gamma" element={<PlanGamma />} />
        <Route path="/plan-delta" element={<PlanDelta />} />
      </Routes>
    </>
  );
}

export default App;
