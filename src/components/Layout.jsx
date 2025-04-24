import Navbar from "./Navbar"; // Asegúrate de tener correctamente importado el Navbar
import { Outlet } from "react-router-dom"; // Outlet para cargar las páginas dinámicamente
import "../styles/Navbar.css";

function Layout() {
  return (
    <div>
      <Navbar /> {/* El Navbar estará presente en todas las páginas */}
      <div className="main-content">
        <Outlet /> {/* Aquí se cargará el contenido de la ruta actual */}
      </div>
    </div>
  );
}

export default Layout;
