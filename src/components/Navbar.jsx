import { useLocation, Link } from "react-router-dom";
import { 
  FaHome, 
  FaUser, 
  FaTools, 
  FaProjectDiagram, 
  FaCertificate,
  FaEnvelope 
} from "react-icons/fa";

import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isPlanPage =
  location.pathname.includes("megahilos") ||
  location.pathname.includes("caso-parking") ||
  location.pathname.includes("plan-oro") ||
  location.pathname.includes("plan-gamma") ||
  location.pathname.includes("plan-delta") ||
  location.pathname.includes("plan-beta");


  // Función para scrollear suavemente y cerrar menú
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Texto izquierdo */}
      <div className="navbar-left">
        {!isPlanPage && (
          <a href="/deploy-example/" className="navbar-brand">Mi Portafolio</a>
        )}

        {isPlanPage && (
  <Link to="/Inicio" className="navbar-back-btn" onClick={() => localStorage.setItem("scrollToProjects", "yes")}>
    Volver
  </Link>
)}


      </div>

      {/* Hamburguesa */}
      {!isPlanPage && (
        <div className="menu-toggle" onClick={() => setIsOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {/* Menú Responsivo */}
      <div className={`navbar-right ${isOpen ? "open" : ""}`}>

        {/* Botón cerrar */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          &times;
        </button>

        {/* CABECERA DEL MENÚ (nombre + correo) */}
        <div className="menu-header">
          <p className="menu-line">
            <FaUser className="menu-icon-header" /> Jersson Fernández
          </p>
          <p className="menu-line">
            <FaEnvelope className="menu-icon-header" /> jerssonfu@gmail.com
          </p>
        </div>

        {/* Opciones del menú */}
        {!isPlanPage && (
          <>
            <button className="navbar-link" onClick={() => goTo("hero")}>
              <FaHome className="menu-icon" />
              Inicio
            </button>

            <button className="navbar-link" onClick={() => goTo("about")}>
              <FaUser className="menu-icon" />
              Sobre mí
            </button>

            <button className="navbar-link" onClick={() => goTo("tools")}>
              <FaTools className="menu-icon" />
              Herramientas
            </button>

            <button className="navbar-link" onClick={() => goTo("projects")}>
              <FaProjectDiagram className="menu-icon" />
              Proyectos
            </button>

            <button className="navbar-link" onClick={() => goTo("Certificados")}>
              <FaCertificate className="menu-icon" />
              Certificados
            </button>
          </>
        )}
      </div>

    </nav>
  );
}

export default Navbar;
