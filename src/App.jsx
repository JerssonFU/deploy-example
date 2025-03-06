import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <Routes>
        {/* Página de inicio */}
        <Route path="/" element={<Home />} />
        
        {/* Página con Navbar */}
        <Route path="/deploy-example/Inicio" element={<PageWithNavbar />} />

        {/* Página de contacto */}
        <Route path="/deploy-example/contact" element={<ContactPage />} />

        {/* Nuevas páginas */}
        <Route path="/deploy-example/Certificaciones" element={<ReactPage />} />
        <Route path="/deploy-example/PowerBI" element={<PowerBIPage />} />
        <Route path="/deploy-example/SqlServer" element={<SMSSPage />} />
        <Route path="/deploy-example/Python" element={<BIAPage />} />
      </Routes>
    </Router>
  );
}

export default App;
