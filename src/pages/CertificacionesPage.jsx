import React, { useState } from "react";
import "../styles/CertificacionesPage.css";

// Se mantiene la estructura original, pero con rutas accesibles
import cert1 from "/assets/cert1.png";
import cert2 from "/assets/cert2.png";
import cert3 from "/assets/cert3.png";
import cert4 from "/assets/cert4.png";

const certificaciones = [
  { image: cert1, link: "/pdf/Cert1.pdf" },
  { image: cert2, link: "/pdf/Cert2.pdf" },
  { image: cert3, link: "/pdf/Cert3.pdf" },
  { image: cert4, link: "/pdf/Cert4.pdf" },
  { image: cert1, link: "/pdf/Cert1.pdf" },
  { image: cert1, link: "/pdf/Cert1.pdf" }
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
    <div className="certificaciones-container">
      <div className="background-container"></div>
      <h1 className="certificaciones-title">CERTIFICACIONES</h1>
      <h1 className="certificaciones-subtitle">Mis logros y acreditaciones profesionales</h1> {/* ✅ SUBTÍTULO AGREGADO */}

      <div className="certificaciones-grid">
        {certificaciones.map((cert, index) => (
          <div key={index} className="cert-item">
            {/* 📌 Imagen de la certificación */}
            <img src={cert.image} alt={`Certificación ${index + 1}`} className="cert-img" />
            
            {/* 📌 Botón para ver el certificado */}
            <button className="cert-button" onClick={() => openModal(cert)}>
              Ver certificado
            </button>
          </div>
        ))}
      </div>

      {/* 📌 Modal para mostrar el certificado en PDF */}
      {modalOpen && selectedCert && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <iframe src={selectedCert.link} className="pdf-viewer"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificacionesPage;
