import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/CertificacionesPage.css";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";


function CertificacionesPage() {
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const certificaciones = [
    { image: cert1, link: "src/pdf/Cert1.pdf" },
    { image: cert2, link: "src/pdf/Cert2.pdf" },
    { image: cert3, link: "src/pdf/Cert3.pdf" },
    { image: cert4, link: "src/pdf/Cert4.pdf" },
    { image: cert1, link: "src/pdf/Cert1.pdf" },
    { image: cert1, link: "src/pdf/Cert1.pdf" }
  ];

  const handleOpenModal = (link) => {
    setActiveLink(link);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveLink("");
  };

  return (
    <div className="cert-page-container">
      <div className="cert-page-background"></div>
      <Navbar />
      <div className="cert-page-content">
        <h1 className="cert-page-title">CERTIFICACIONES</h1>
        <p className="cert-page-description">Certificaciones en diversas áreas profesionales</p>
        <div className="cert-page-grid">
          {certificaciones.map((cert, index) => (
            <div key={index} className="cert-page-text-box">
              <img src={cert.image} alt={`Certificación ${index + 1}`} />
              <button className="cert-page-visualizar-button" onClick={() => handleOpenModal(cert.link)}>
                Ver Certificado
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="cert-page-modal-overlay">
          <div className="cert-page-modal-content">
            <button className="cert-page-close-button" onClick={handleCloseModal}>X</button>
            <iframe src={activeLink} title="Certificado" width="100%" height="100%" style={{ border: "none" }}></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificacionesPage;
