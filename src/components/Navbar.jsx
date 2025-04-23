import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Lobby</NavLink>
        <NavLink to="/Inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
        <NavLink to="/Certificaciones" className={({ isActive }) => isActive ? "active" : ""}>Certificaciones</NavLink>
        <NavLink to="/PowerBI" className={({ isActive }) => isActive ? "active" : ""}>Power BI</NavLink>
        <NavLink to="/SMSS" className={({ isActive }) => isActive ? "active" : ""}>SMSS</NavLink>
        <NavLink to="/Python" className={({ isActive }) => isActive ? "active" : ""}>Python</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
