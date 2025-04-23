import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Botón Hamburguesa */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Contenedor de enlaces */}
      <div className={`navbar-container ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Lobby</NavLink>
        <NavLink to="/Inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
        <NavLink to="/Certificaciones" className={({ isActive }) => isActive ? "active" : ""}>Certificaciones</NavLink>
        <NavLink to="/PowerBI" className={({ isActive }) => isActive ? "active" : ""}>Power BI</NavLink>
        <NavLink to="/SMSS" className={({ isActive }) => isActive ? "active" : ""}>SMSS</NavLink>
        <NavLink to="/Python" className={({ isActive }) => isActive ? "active" : ""}>Python</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
