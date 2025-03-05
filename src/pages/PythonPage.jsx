import React from "react";
import Navbar from "../components/Navbar"; // Importamos el Navbar
import "../styles/PythonPage.css"; // Importamos los estilos

function PythonPage() {
  return (
    <div className="bia-container">
      <div className="background-container"></div> {/* Fondo con blur */}
      <Navbar />  {/* Aquí se muestra el Navbar */}
      <div className="content">
        <h1>Página Python</h1>
        <p>Esta página está dedicada al análisis de impacto de negocio (BIA), un proceso esencial para evaluar los riesgos y el impacto en los procesos clave de una empresa.</p>
      </div>
    </div>
  );
}

export default PythonPage;