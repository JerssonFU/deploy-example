import "../styles/Home.css";
import { FaFilePdf, FaWhatsapp, FaProjectDiagram } from "react-icons/fa"; // Importamos los íconos

function Home() {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1 className="main-title">Jersson Jair Fernández Uchuya</h1>
        <h2 className="sub-title wave-effect">
          Front End Developer & Business Intelligence Analyst
        </h2>
        <p className="simple">
          Aquí podrás ver mis proyectos más recientes y contactarme para cualquier consulta.
        </p>
      </div>
      <div className="buttons-container">
        {/* Botón Ver Proyectos con icono */}
        <button
          onClick={() => (window.location.href = "/inicio")}
          className="animated-button"
        >
          <FaProjectDiagram className="button-icon" /> Proyectos
        </button>

        {/* Botón de Descargar CV con icono */}
        <a
          href="/CV_Jersson.pdf" // Ruta del PDF
          download="CV_Jersson_Fernandez.pdf"
          className="cv-download-button animated-button"
        >
          <FaFilePdf className="button-icon" />
          Descargar CV
        </a>

        {/* Botón de WhatsApp con icono mejor alineado */}
        <a
          href="https://wa.me/961642598"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link animated-button"
        >
          <FaWhatsapp className="button-icon" /> Contáctame
        </a>
      </div>
    </div>
  );
}

export default Home;
