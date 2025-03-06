import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import PageWithNavbar from "./pages/PageWithNavbar";
import ContactPage from "./pages/ContactPage";
import ReactPage from "./pages/CertificacionesPage";
import PowerBIPage from "./pages/PowerBiPage";
import SMSSPage from "./pages/SMSSPage";
import BIAPage from "./pages/PythonPage";

function App() {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <>
      {/* Mostrar Navbar SOLO si la ruta NO es "/" (Home.jsx) */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} /> {/* Home sin Navbar */}
        <Route path="/Inicio" element={<PageWithNavbar />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Certificaciones" element={<ReactPage />} />
        <Route path="/PowerBI" element={<PowerBIPage />} />
        <Route path="/SqlServer" element={<SMSSPage />} />
        <Route path="/Python" element={<BIAPage />} />
      </Routes>
    </>
  );
}

export default App;
