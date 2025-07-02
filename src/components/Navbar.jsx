import React from "react";
import "../styles/Navbar.css";

function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/deploy-example/" className="navbar-brand">Mi Portafolio</a>
      </div>
      <div className="navbar-right">
        <button onClick={() => scrollToSection("hero")} className="navbar-link">Inicio</button>
        <button onClick={() => scrollToSection("about")} className="navbar-link">Sobre mí</button>
        <button onClick={() => scrollToSection("tools")} className="navbar-link">Herramientas</button>
        <button onClick={() => scrollToSection("projects")} className="navbar-link">Planes</button>
      </div>
    </nav>
  );
}

export default Navbar;
