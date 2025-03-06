import "../styles/Home.css";
import { FaFilePdf, FaWhatsapp, FaProjectDiagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const cvPath = `${import.meta.env.BASE_URL}CV_Jersson_Fernandez.pdf`; // Asegurar la descarga correcta

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
        {/* Botón Ver Proyectos */}
        <button onClick={() => navigate("/Inicio")} className="animated-button">
          <FaProjectDiagram className="button-icon" /> Proyectos
        </button>

        {/* Botón de Descargar CV */}
        <a href={cvPath} download="CV_Jersson_Fernandez.pdf" className="cv-download-button animated-button">
          <FaFilePdf className="button-icon" /> Descargar CV
        </a>

        {/* Botón de WhatsApp */}
        <a href="https://wa.me/961642598" target="_blank" rel="noopener noreferrer" className="whatsapp-link animated-button">
          <FaWhatsapp className="button-icon" /> Contáctame
        </a>
      </div>
    </div>
  );
}

export default Home;
