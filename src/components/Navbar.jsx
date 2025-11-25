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

      {/* NAVBAR IZQUIERDA */}
      <div className="navbar-left">

        {/* Mostrar logo solo cuando NO estamos en planes */}
        {!isPlanPage && (
          <a href="/deploy-example/" className="navbar-brand">Mi Portafolio</a>
        )}

        {/* Mostrar botón VOLVER cuando SÍ es un plan */}
        {isPlanPage && (
          <Link to="/Inicio" className="navbar-back-btn">
            Volver
          </Link>
        )}

      </div>

      {/* NAVBAR DERECHA */}
      <div className={`navbar-right ${isOpen ? "open" : ""}`}>

        {/* Ocultar todos los links si es un plan */}
        {!isPlanPage && (
          <>
            <button className="navbar-link" onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}>
              Inicio
            </button>
            <button className="navbar-link" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              Sobre mí
            </button>
            <button className="navbar-link" onClick={() => document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" })}>
              Herramientas
            </button>
            <button className="navbar-link" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              Proyectos
            </button>
            <button className="navbar-link" onClick={() => document.getElementById("Certificados")?.scrollIntoView({ behavior: "smooth" })}>
              Certificados
            </button>
          </>
        )}

        {/* ⭐ FIX: Placeholder invisible para mantener altura */}
        {isPlanPage && (
          <div style={{ width: "80px", height: "1px" }}></div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
