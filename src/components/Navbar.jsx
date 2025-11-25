import { useLocation, Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isPlanPage =
    location.pathname.includes("plan-bronce") ||
    location.pathname.includes("plan-plata") ||
    location.pathname.includes("plan-oro") ||
    location.pathname.includes("plan-gamma") ||
    location.pathname.includes("plan-delta") ||
    location.pathname.includes("plan-beta");

  return (
    <nav className="navbar">

  <div className="navbar-left">
    {!isPlanPage && (
      <a href="/deploy-example/" className="navbar-brand">Mi Portafolio</a>
    )}

    {isPlanPage && (
      <Link to="/Inicio" className="navbar-back-btn">
        Volver
      </Link>
    )}
  </div>

  {/* Botón hamburguesa */}
  {!isPlanPage && (
    <div className="menu-toggle" onClick={() => setIsOpen(true)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )}

  {/* Menú móvil */}
  <div className={`navbar-right ${isOpen ? "open" : ""}`}>
    <button className="close-btn" onClick={() => setIsOpen(false)}>
      &times;
    </button>

    {!isPlanPage && (
      <>
        <button className="navbar-link" onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}>Inicio</button>
        <button className="navbar-link" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>Sobre mí</button>
        <button className="navbar-link" onClick={() => document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" })}>Herramientas</button>
        <button className="navbar-link" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Proyectos</button>
        <button className="navbar-link" onClick={() => document.getElementById("Certificados")?.scrollIntoView({ behavior: "smooth" })}>Certificados</button>
      </>
    )}
  </div>

</nav>

  );
}

export default Navbar;
