import React, { useState } from "react";
import "../styles/PowerBiPage.css";

const dash1 = "/assets/dash1.png"; // Ruta absoluta desde public/

const items = [
  { image: dash1, link: "https://app.powerbi.com/view?r=eyJrIjoiNzAwNThjNzUtZDllNS00MTBlLWI3YTItZDU2MTk0ODI1NzMwIiwidCI6ImM0YTY2YzM0LTJiYjctNDUxZi04YmUxLWIyYzI2YTQzMDE1OCIsImMiOjR9" },
  { image: dash1, link: "https://app.powerbi.com/view?r=eyJrIjoiNzAwNThjNzUtZDllNS00MTBlLWI3YTItZDU2MTk0ODI1NzMwIiwidCI6ImM0YTY2YzM0LTJiYjctNDUxZi04YmUxLWIyYzI2YTQzMDE1OCIsImMiOjR9" },
  { image: dash1, link: "https://app.powerbi.com/view?r=eyJrIjoiNzAwNThjNzUtZDllNS00MTBlLWI3YTItZDU2MTk0ODI1NzMwIiwidCI6ImM0YTY2YzM0LTJiYjctNDUxZi04YmUxLWIyYzI2YTQzMDE1OCIsImMiOjR9" },
  { image: dash1, link: "https://app.powerbi.com/view?r=eyJrIjoiNzAwNThjNzUtZDllNS00MTBlLWI3YTItZDU2MTk0ODI1NzMwIiwidCI6ImM0YTY2YzM0LTJiYjctNDUxZi04YmUxLWIyYzI2YTQzMDE1OCIsImMiOjR9" },
  { image: dash1, link: "https://app.powerbi.com/view?r=eyJrIjoiNzAwNThjNzUtZDllNS00MTBlLWI3YTItZDU2MTk0ODI1NzMwIiwidCI6ImM0YTY2YzM0LTJiYjctNDUxZi04YmUxLWIyYzI2YTQzMDE1OCIsImMiOjR9" },
  { image: dash1, link: "https://app.powerbi.com/view?r=eyJrIjoiNzAwNThjNzUtZDllNS00MTBlLWI3YTItZDU2MTk0ODI1NzMwIiwidCI6ImM0YTY2YzM0LTJiYjctNDUxZi04YmUxLWIyYzI2YTQzMDE1OCIsImMiOjR9" },
];

function PowerBIPage() {
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleOpenModal = (link) => {
    setActiveLink(link);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveLink("");
  };

  return (
    <div className="powerbi-page-container">
      <div className="background-container"></div>
      <div className="content-container">
        <h1 className="title">PROYECTOS DE POWER BI</h1>
        <p className="description">Reportes, Dashboards, funciones DAX, Análisis</p>
        <div className="grid-container">
          {items.map((item, index) => (
            <div key={index} className="text-box">
              <img src={item.image} alt={`Imagen ${index + 1}`} />
              <button className="visualizar-button" onClick={() => handleOpenModal(item.link)}>
                Visualizar
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <iframe src={activeLink} title="Contenido visualizado" width="100%" height="100%" style={{ border: "none" }}></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default PowerBIPage;
