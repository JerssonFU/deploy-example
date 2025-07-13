import React, { useState } from "react";
import "../styles/PageWithNavbar.css";
import "../styles/Inicio.css";

function PageWithNavbar() {
  const [index, setIndex] = useState(0);
  const total = 6; // número de certificados

  return (
    <div className="inicio-container">
      <div className="page-background">
        <div className="main-content">

          {/* HERO SECTION */}
          <div id="hero" className="hero-container">
            <div className="hero-text">
              <h1 className="hero-title">Bienvenidos a mi Portafolio Web</h1>
              <h2 className="description">
                Los datos cuentan la historia que el negocio necesita escuchar
              </h2>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <div id="about" className="about-container exact-style">
            <div className="about-image">
              <img src="./assets/pp.jpg" alt="Jersson Jair Fernández" />
            </div>
            <div className="about-text-content">
              <h2>Sobre mí</h2>
              <p>
                Soy Jersson Jair Fernández Uchuya, especialista en Business Intelligence.
                Me apasiona transformar datos en estrategias efectivas que impulsen la toma de decisiones en las organizaciones.
                Manejo herramientas como Power BI, Python, SQL Server y frameworks de Front-End para ofrecer soluciones completas.
              </p>
              <a href="#Certificados" className="big-black-button">
                Ver Certificados
              </a>
            </div>
          </div>

          {/* TOOLS SECTION */}
          <div id="tools" className="tools-container">
            <h2 className="tools-title">Manejo de Herramientas Informáticas</h2>
            <div className="tools-grid">
              <div className="tool-card">
                <img src="./assets/excelv8.png" alt="Excel" />
                <h3>Excel</h3>
              </div>
              <div className="tool-card">
                <img src="./assets/sql.png" alt="SQL Server" />
                <h3>SQL Server</h3>
              </div>
              <div className="tool-card">
                <img src="./assets/powerbiv4.png" alt="Power BI" />
                <h3>Power BI</h3>
              </div>
              <div className="tool-card">
                <img src="./assets/python.png" alt="Python" />
                <h3>Python</h3>
              </div>
              <div className="tool-card">
                <img src="./assets/react.png" alt="React" />
                <h3>React</h3>
              </div>
              <div className="tool-card">
                <img src="./assets/visualv4.png" alt="Visual Studio" />
                <h3>Visual Studio</h3>
              </div>
            </div>
          </div>

          {/* PROJECTS SECTION */}
          <div id="projects" className="projects-container">
            <h2 className="projects-title">PROYECTOS</h2>
            <div className="plans-grid">
              <div className="plan-card">
                <img src="./assets/re.jpeg" alt="Plan Bronce" />
                <div className="plan-card-content">
                  <h3>Plan Bronce</h3>
                  <p className="plan-state">COMPLETE</p>
                  <p>Por única vez</p>
                  <p className="plan-desc">
                    Acceso ilimitado a clases y talleres exclusivos.
                  </p>
                  <a href="#registro" className="plan-button">Registrarse</a>
                </div>
              </div>
              <div className="plan-card">
                <img src="./assets/re.jpeg" alt="Plan Plata" />
                <div className="plan-card-content">
                  <h3>Plan Plata</h3>
                  <p className="plan-state">IN PROGRESS</p>
                  <p>Por única vez</p>
                  <p className="plan-desc">
                    Acceso ilimitado a clases y talleres exclusivos.
                  </p>
                  <a href="#registro" className="plan-button">Registrarse</a>
                </div>
              </div>
              <div className="plan-card">
                <img src="./assets/re.jpeg" alt="Plan Oro" />
                <div className="plan-card-content">
                  <h3>Plan Oro</h3>
                  <p className="plan-state">IN PROGRESS</p>
                  <p>Por única vez</p>
                  <p className="plan-desc">
                    Acceso ilimitado a clases y talleres exclusivos.
                  </p>
                  <a href="#registro" className="plan-button">Registrarse</a>
                </div>
              </div>
            </div>
          </div>

{/* CERTIFICADOS SECTION */}
<div id="Certificados" className="certificates-showcase">
  <h2 className="certificates-title">Certificados Obtenidos</h2>
  <div className="carousel-container single-slide">

    <div className="single-certificate fade">
      {index === 0 && (
        <img src="./assets/cert1.png" alt="Certificado 1" loading="lazy" />

      )}
      {index === 1 && (
        <img src="./assets/cert2.png" alt="Certificado 2" loading="lazy" />
      )}
      {index === 2 && (
        <img src="./assets/cert3.png" alt="Certificado 3" loading="lazy" />
      )}
      {index === 3 && (
        <img src="./assets/cert4.png" alt="Certificado 4" loading="lazy" />
      )}
      {index === 4 && (
        <img src="./assets/cert5.png" alt="Certificado 5" loading="lazy" />
      )}
      {index === 5 && (
        <img src="./assets/cert5.png" alt="Certificado 6" loading="lazy" />
      )}
    </div>

    <div className="buttons-row">
      <button className="nav prev"
        onClick={() => setIndex(index === 0 ? total - 1 : index - 1)}>
        &#10094;
      </button>

      <button className="nav next"
        onClick={() => setIndex(index === total - 1 ? 0 : index + 1)}>
        &#10095;
      </button>
    </div>
  </div>
</div>








        </div>
      </div>
    </div>
  );
}

export default PageWithNavbar;
