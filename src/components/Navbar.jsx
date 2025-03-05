import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Mi Portafolio</Link>
      </div>
      <div className="navbar-right">
        <Link to="/Inicio">Inicio</Link>
        <Link to="/Certificaciones">Certificaciones</Link>
        <Link to="/PowerBI">Power BI</Link>
        <Link to="/SqlServer">SMSS</Link>
        <Link to="/Python">Python</Link>
      </div>
    </nav>
  );
}

export default Navbar;
