import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PageWithNavbar from "./pages/PageWithNavbar";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ReactPage from "./pages/CertificacionesPage";
import JavaPage from "./pages/PowerBiPage";
import SMSSPage from "./pages/SMSSPage";
import BIAPage from "./pages/PythonPage";
import PowerBIPage from "./pages/PowerBiPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inicio" element={<PageWithNavbar />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Certificaciones" element={<ReactPage />} />
        <Route path="/PowerBI" element={<PowerBIPage />} />
        <Route path="/SqlServer" element={<SMSSPage />} />
        <Route path="/Python" element={<BIAPage />} />
        {/* Redirección en caso de rutas desconocidas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
