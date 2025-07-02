import React from "react";
import "../styles/PageWithNavbar.css";
import "../styles/Inicio.css"; // añade esto para el CSS de inicio-container

function PageWithNavbar() {
  return (
    <div className="inicio-container"> {/* <<== nuevo contenedor */}
      <div className="page-background">
        <div className="main-content">

          {/* HERO SECTION */}
          <div id="hero" className="hero-container">
            <div className="hero-text">
              <h1 className="hero-title">Bienvenidos a mi Portafolio Web</h1>
              <h2 className="description">
                Los datos cuentan la historia que el negocio necesita escuchar.
              </h2>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <div id="about" className="about-container">
            <h2 className="about-title">Sobre mí</h2>
            <p className="about-text">
              Soy Jersson Jair Fernández Uchuya, especialista en Business Intelligence.
              Me apasiona transformar datos en estrategias efectivas que impulsen la toma de decisiones en las organizaciones.
              Manejo herramientas como Power BI, Python, SQL Server y frameworks de Front-End para ofrecer soluciones completas.
            </p>
            <div className="about-extra">
              <a href="/deploy-example/CV_Jersson_Fernandez.pdf" download className="project-button">
                Descargar mi CV
              </a>
            </div>
          </div>

          {/* TOOLS SECTION */}
          <div id="tools" className="tools-container">
            <h2 className="tools-title">Manejo de Herramientas Informáticas</h2>
            <div className="tools-grid">
              <div className="tool-box">Herramienta 1</div>
              <div className="tool-box">Herramienta 2</div>
              <div className="tool-box">Herramienta 3</div>
              <div className="tool-box">Herramienta 4</div>
              <div className="tool-box">Herramienta 5</div>
              <div className="tool-box">Herramienta 6</div>
            </div>
          </div>

          {/* PROJECTS SECTION */}
          <div id="projects" className="projects-container">
            <h2 className="projects-title">Elige tu plan</h2>
            <div className="projects-grid">
              <div className="project-card">
                <p className="project-desc">Proyecto 1</p>
                <a href="#projects" className="project-button">Ver proyecto</a>
              </div>
              <div className="project-card">
                <p className="project-desc">Proyecto 2</p>
                <a href="#projects" className="project-button">Ver proyecto</a>
              </div>
              <div className="project-card">
                <p className="project-desc">Proyecto 3</p>
                <a href="#projects" className="project-button">Ver proyecto</a>
              </div>
              <div className="project-card">
                <p className="project-desc">Proyecto 4</p>
                <a href="#projects" className="project-button">Ver proyecto</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PageWithNavbar;
