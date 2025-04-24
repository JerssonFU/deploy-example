import React, { useState } from "react";
import "../styles/CertificacionesPage.css";

import cert1 from "/assets/cert1.png";
import cert2 from "/assets/cert2.png";
import cert3 from "/assets/cert5.png";
import cert4 from "/assets/cert4.png";
import cert5 from "/assets/cert3.png";

const baseURL = "/deploy-example";
const certificaciones = [
  { image: cert1, link: `${baseURL}/pdf/Cert1.pdf` },
  { image: cert2, link: `${baseURL}/pdf/Cert2.pdf` },
  { image: cert3, link: `${baseURL}/pdf/Cert5.pdf` },
  { image: cert4, link: `${baseURL}/pdf/Cert3.pdf` },
  { image: cert5, link: `${baseURL}/pdf/Cert4.pdf` },
  { image: cert1, link: `${baseURL}/pdf/Cert1.pdf` }
];

function CertificacionesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setModalOpen(false);
  };

  return (
    <div className="Wallpaper-Certificaciones">
      <div className="certificaciones-container main-content">
        <div className="background-container"></div>
        <h1 className="certificaciones-title">CERTIFICACIONES</h1>
        <h1 className="certificaciones-subtitle">Mis logros y acreditaciones profesionales</h1>
  
        <div className="certificaciones-grid">
          {certificaciones.map((cert, index) => (
            <div key={index} className="cert-item">
              <img src={cert.image} alt={`Certificación ${index + 1}`} className="cert-img" />
              <button className="cert-button" onClick={() => openModal(cert)}>
                Ver certificado
              </button>
            </div>
          ))}
        </div>
  
        {modalOpen && selectedCert && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={closeModal}>&times;</span>
              <iframe src={`${selectedCert.link}#page=1`} className="pdf-viewer"></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default CertificacionesPage;
