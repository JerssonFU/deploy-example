import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWithNavbar from "./pages/PageWithNavbar";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ReactPage from "./pages/CertificacionesPage";  // Importa la nueva página
import JavaPage from "./pages/PowerBiPage";    // Importa la nueva página
import SMSSPage from "./pages/SMSSPage";    // Importa la nueva página
import BIAPage from "./pages/PythonPage";      // Importa la nueva página
import PowerBIPage from "./pages/PowerBiPage";

function App() {
  return (
    <Router basename="deploy-example">
      <Routes>
        {/* Página de inicio */}
        <Route path="/" element={<Home />} />

        {/* Página con Navbar */}
        <Route path="/Inicio" element={<PageWithNavbar />} />

        {/* Página de contacto */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Nuevas páginas */}
        <Route path="/Certificaciones" element={<ReactPage />} />
        <Route path="/PowerBI" element={<PowerBIPage />} />
        <Route path="/SqlServer" element={<SMSSPage />} />
        <Route path="/Python" element={<BIAPage />} />
      </Routes>
    </Router>
  );
}

export default App;
