import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Asegurar que Layout está cargado
import Home from "./pages/Home";
import PageWithNavbar from "./pages/PageWithNavbar";
import ContactPage from "./pages/ContactPage";
import ReactPage from "./pages/CertificacionesPage";
import PowerBIPage from "./pages/PowerBiPage";
import SMSSPage from "./pages/SMSSPage";
import BIAPage from "./pages/PythonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Inicio" element={<PageWithNavbar />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="Certificaciones" element={<ReactPage />} />
        <Route path="PowerBI" element={<PowerBIPage />} />
        <Route path="SqlServer" element={<SMSSPage />} />
        <Route path="Python" element={<BIAPage />} />
      </Route>
    </Routes>
  );
}

export default App;
