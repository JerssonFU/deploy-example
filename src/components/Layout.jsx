import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Outlet /> {/* Aquí se cargará el contenido de la página actual */}
      </div>
    </div>
  );
}

export default Layout;
