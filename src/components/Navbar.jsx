import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-container ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Lobby</NavLink>
        <NavLink to="/Inicio" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
        <NavLink to="/Certificaciones" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Certificaciones</NavLink>
        <NavLink to="/PowerBI" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Power BI</NavLink>
        <NavLink to="/SMSS" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>SMSS</NavLink>
        <NavLink to="/Python" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Python</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
