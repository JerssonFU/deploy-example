import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/PageWithNavbar.css";
import "../styles/Inicio.css";

function PageWithNavbar() {

  /* --- CONFIGURACIÓN DEL CARRUSEL INFINITO REAL --- */
  const total = 6;
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleTransitionEnd = () => {
    if (index === 0) {
      setIsTransitioning(false);
      setIndex(total);
    }
    if (index === total + 1) {
      setIsTransitioning(false);
      setIndex(1);
    }
  };

  useEffect(() => {
    if (index > 0 && index < total + 1) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [index]);

  /* === SISTEMA REVEAL === */
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

    // 👇 Ahora observa reveal GENERAL y CADA tarjeta
    document
      .querySelectorAll(".reveal, .plan-card")
      .forEach((el) => observer.observe(el));

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

              <a
                href="https://www.linkedin.com/in/jersson-jair-fernández-uchuya-a63165382"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-button"
              >
                <img src="./assets/linkedin.jpg" alt="LinkedIn" className="linkedin-icon" />
                Ver Perfil LinkedIn
              </a>
            </div>
          </div>

          {/* TOOLS */}
          <div id="tools" className="tools-container">
            <h2 className="tools-title reveal">Manejo de Herramientas Informáticas</h2>

            <div className="tools-grid reveal">
              <div className="tool-card"><img src="./assets/excelv8.png" /><h3>Excel</h3></div>
              <div className="tool-card"><img src="./assets/sql.png" /><h3>SQL Server</h3></div>
              <div className="tool-card"><img src="./assets/powerbiv4.png" /><h3>Power BI</h3></div>
              <div className="tool-card"><img src="./assets/python.png" /><h3>Python</h3></div>
              <div className="tool-card"><img src="./assets/react.png" /><h3>React</h3></div>
              <div className="tool-card"><img src="./assets/visualv4.png" /><h3>Visual Studio</h3></div>
            </div>
          </div>

          {/* PROJECTS */}
          <div id="projects" className="projects-container">
            <h2 className="projects-title reveal">PROYECTOS</h2>

            {/* 👇 FIX: QUITAMOS reveal del contenedor */}
            <div className="plans-grid">

              {/* 1 */}
              <div className="plan-card">
                <img src="./assets/re.jpeg" alt="Plan Bronce" />
                <div className="plan-card-content">
                  <h3>Plan Bronce</h3>
                  <p className="plan-state">COMPLETE</p>
                  <p>Por única vez</p>
                  <p className="plan-desc">Acceso ilimitado a clases y talleres exclusivos.</p>
                  <Link to="/plan-bronce" className="plan-button">Registrarse</Link>
                </div>
              </div>

              {/* 2 */}
              <div className="plan-card">
                <img src="./assets/re.jpeg" alt="Plan Plata" />
                <div className="plan-card-content">
                  <h3>Plan Plata</h3>
                  <p className="plan-state">IN PROGRESS</p>
                  <p>Por única vez</p>
                  <p className="plan-desc">Acceso ilimitado a clases y talleres exclusivos.</p>
                  <Link to="/plan-plata" className="plan-button">Registrarse</Link>
                </div>
              </div>

              {/* 3 */}
              <div className="plan-card">
                <img src="./assets/re.jpeg" alt="Plan Oro" />
                <div className="plan-card-content">
                  <h3>Plan Oro</h3>
                  <p className="plan-state">IN PROGRESS</p>
                  <p>Por única vez</p>
                  <p className="plan-desc">Acceso ilimitado a clases y talleres exclusivos.</p>
                  <Link to="/plan-oro" className="plan-button">Registrarse</Link>
                </div>
              </div>

              {/* 4 */}
              <div className="plan-card">
                <img src="./assets/re.jpeg" alt="Plan Beta" />
                <div className="plan-card-content">
                  <h3>Plan Beta</h3>
                  <p className="plan-state">IN PROGRESS</p>
                  <p>Por única vez</p>
                  <p className="plan-desc">Acceso ilimitado a clases y talleres exclusivos.</p>
                  <Link to="/plan-beta" className="plan-button">Registrarse</Link>
                </div>
              </div>

              {/* 5 */}
              <div className="plan-card">
                <img src="./assets/re.jpeg" alt="Plan Gamma" />
                <div className="plan-card-content">
                  <h3>Plan Gamma</h3>
                  <p className="plan-state">COMPLETE</p>
                  <p>Por única vez</p>
                  <p className="plan-desc">Acceso ilimitado a clases y talleres exclusivos.</p>
                  <Link to="/plan-gamma" className="plan-button">Registrarse</Link>
                </div>
              </div>

              {/* 6 */}
              <div className="plan-card">
                <img src="./assets/re.jpeg" alt="Plan Delta" />
                <div className="plan-card-content">
                  <h3>Plan Delta</h3>
                  <p className="plan-state">IN PROGRESS</p>
                  <p>Por única vez</p>
                  <p className="plan-desc">Acceso ilimitado a clases y talleres exclusivos.</p>
                  <Link to="/plan-delta" className="plan-button">Registrarse</Link>
                </div>
              </div>

            </div>
          </div>

          {/* CERTIFICADOS */}
          <div id="Certificados" className="certificates-showcase">
            <h2 className="certificates-title reveal">Certificados Obtenidos</h2>

            <div className="carousel-wrapper reveal">
              <div className="carousel-container">
                <div
                  className="carousel-track"
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: isTransitioning ? "transform 0.55s ease-in-out" : "none"
                  }}
                >

                  <div className="slide"><img src="./assets/cert5.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert1.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert2.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert3.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert4.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert5.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert5.png" loading="lazy" /></div>
                  <div className="slide"><img src="./assets/cert1.png" loading="lazy" /></div>

                </div>
              </div>

              <div className="carousel-buttons">
                <button className="nav prev" onClick={() => setIndex(index - 1)}>&#10094;</button>
                <button className="nav next" onClick={() => setIndex(index + 1)}>&#10095;</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PageWithNavbar;
