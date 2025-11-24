import React, { useState, useEffect } from "react";
import "../styles/PageWithNavbar.css";
import "../styles/Inicio.css";

function PageWithNavbar() {

  /* --- CONFIGURACIÓN DEL CARRUSEL INFINITO REAL --- */
  const total = 6;
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 🚀 Evita doble animación usando reset DESPUÉS del transitionEnd
  const handleTransitionEnd = () => {
    if (index === 0) {
      setIsTransitioning(false);
      setIndex(total); // salto sin transición
    }

    if (index === total + 1) {
      setIsTransitioning(false);
      setIndex(1); // salto sin transición
    }
  };

  // 🚀 Se activa animación SOLO cuando ya estamos en un slide real
  useEffect(() => {
    if (index > 0 && index < total + 1) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [index]);

  /* === SISTEMA REVEAL (solo para contenido interno) === */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="inicio-container">
      <div className="page-background">
        <div className="main-content">

          {/* HERO SECTION */}
          <div id="hero" className="hero-container">
            <div className="hero-text reveal">
              <h1 className="hero-title">Bienvenidos a mi Portafolio Web</h1>
              <h2 className="description">
                Los datos cuentan la historia que el negocio necesita escuchar
              </h2>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <div id="about" className="about-container exact-style">
            <div className="about-image reveal">
              <img src="./assets/pp.jpg" alt="Jersson Jair Fernández" />
            </div>

            <div className="about-text-content reveal">
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
            <h2 className="tools-title reveal">Manejo de Herramientas Informáticas</h2>

            <div className="tools-grid reveal">
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
            <h2 className="projects-title reveal">PROYECTOS</h2>

            <div className="plans-grid reveal">
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

          {/* =============================== */}
          {/*     🎓   SECCIÓN CERTIFICADOS     */}
          {/* =============================== */}

          <div id="Certificados" className="certificates-showcase">
            <h2 className="certificates-title reveal">Certificados Obtenidos</h2>

            <div className="carousel-wrapper reveal">

              {/* Botón Izquierdo */}
              <button className="nav prev" onClick={() => setIndex(index - 1)}>
                &#10094;
              </button>

              <div className="carousel-container">
                <div
                  className="carousel-track"
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: isTransitioning ? "transform 0.55s ease-in-out" : "none"
                  }}
                >
                  {/* CLON DEL ÚLTIMO */}
                  <div className="slide"><img src="./assets/cert5.png" loading="lazy" /></div>

                  {/* SLIDES REALES */}
                  <div className="slide"><img src="./assets/cert1.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert2.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert3.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert4.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert5.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert5.png" loading="lazy" /></div>

                  {/* CLON DEL PRIMERO */}
                  <div className="slide"><img src="./assets/cert1.png" loading="lazy" /></div>

                </div>
              </div>

              {/* Botón Derecho */}
              <button className="nav next" onClick={() => setIndex(index + 1)}>
                &#10095;
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PageWithNavbar;
