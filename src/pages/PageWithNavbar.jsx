import React from "react";
import "../styles/PageWithNavbar.css";

function PageWithNavbar() {
  return (
    <div className="main-content">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">Perfil Profesional </h1>
          <h2 className="description">
            Me especializo en el análisis, transformación y visualización de datos utilizando herramientas BI para optimizar la toma de decisiones en las organizaciones. Además, cuento con conocimientos en Front-End, lo que me permite estructurar y presentar la información de manera clara y eficiente, mejorando la experiencia del usuario.
          </h2>
        </div>
      </div>

      <div className="tools-container">
        <h2 className="tools-title">Manejo de Herramientas Informáticas</h2>
        <div className="tools-grid">
          <div className="tool-box">
            <img src="./assets/sql.png" alt="SQL Server" className="tool-img" />
          </div>
          <div className="tool-box">
            <img src="./assets/react.png" alt="React" className="tool-img" />
          </div>
          <div className="tool-box">
            <img src="./assets/excel.png" alt="Excel" className="tool-img" />
          </div>
          <div className="tool-box">
            <img src="./assets/powerbi.png" alt="Power BI" className="tool-img" />
          </div>
          <div className="tool-box">
            <img src="./assets/git.png" alt="Git" className="tool-img" />
          </div>
          <div className="tool-box">
            <img src="./assets/python.png" alt="Python" className="tool-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageWithNavbar;
