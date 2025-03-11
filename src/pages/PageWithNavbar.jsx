import React from "react";
import "../styles/PageWithNavbar.css";


function PageWithNavbar() {
  return (
    <div>
      <div className="navbar-container">
      </div>
      
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">Perfil Profesional</h1>
          <h3 className="hero-subtitle">Business Intelligence Analyst</h3>
          <h2 className="description">
          Me especializo en el análisis, transformación y visualización de datos utilizando herramientas BI para optimizar la toma de decisiones en las organizaciones. Además, cuento con conocimientos en Front-End, lo que me permite estructurar y presentar la información de manera clara y eficiente, mejorando la experiencia del usuario.
          </h2>
        </div>
      </div>

      <div className="tools-container">
        <h2 className="tools-title">Manejo de Herramientas Informáticas</h2>
        <div className="tools-grid">
          <div className="tool-box">
            <img src="public/assets/sql.png" alt="SQL Server" className="tool-img" />
            <p className="tool-info">SQL Server</p>
          </div>
          <div className="tool-box">
            <img src="public/assets/react.png" alt="React" className="tool-img" />
            <p className="tool-info">React</p>
          </div>
          <div className="tool-box">
            <img src="public/assets/excel.png" alt="Excel" className="tool-img" />
            <p className="tool-info">Excel</p>
          </div>
          <div className="tool-box">
            <img src="public/assets/powerbi.png" alt="Power BI" className="tool-img" />
            <p className="tool-info">Power BI</p>
          </div>
          <div className="tool-box">
            <img src="public/assets/git.png" alt="Git" className="tool-img" />
            <p className="tool-info">Git</p>
          </div>
          <div className="tool-box">
            <img src="public/assets/python.png" alt="Python" className="tool-img" />
            <p className="tool-info">Python</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageWithNavbar;
