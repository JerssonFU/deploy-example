import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // cierra menú al hacer click
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span><span></span><span></span>
      </div>
      <div className="navbar-left">
        <a href="/" className="navbar-brand">Mi Portafolio</a>
      </div>
      <div className={`navbar-right ${isOpen ? "open" : ""}`}>
  <button className="close-btn" onClick={() => setIsOpen(false)}>←</button>
  <button onClick={() => scrollToSection("hero")} className="navbar-link">Inicio</button>
  <button onClick={() => scrollToSection("about")} className="navbar-link">Sobre mí</button>
  <button onClick={() => scrollToSection("tools")} className="navbar-link">Herramientas</button>
  <button onClick={() => scrollToSection("projects")} className="navbar-link">Planes</button>
</div>


    </nav>
  );
}

export default Navbar;
