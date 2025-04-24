import Navbar from "./Navbar"; // Asegúrate de tener correctamente importado el Navbar
import { Outlet } from "react-router-dom"; // Outlet para cargar las páginas dinámicamente
import "../styles/Navbar.css";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}


export default Layout;
