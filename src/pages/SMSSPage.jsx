import React from "react";
import Navbar from "../components/Navbar"; // Importamos el Navbar
import "../styles/SMSSPage.css"; // Importamos los estilos

function SMSSPage() {
  return (
    <div className="smss-container">
      <div className="background-container"></div> {/* Fondo con blur */}
      <Navbar />  {/* Aquí se muestra el Navbar */}
      <div className="content">
        <h1>Página SMSS</h1>
        <p>En esta página se abordará el Sistema de Manejo de Solicitudes de Servicio (SMSS), utilizado para gestionar incidencias y solicitudes dentro de un sistema informático.</p>
      </div>
    </div>
  );
}

export default SMSSPage;