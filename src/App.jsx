import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PageWithNavbar from "./pages/PageWithNavbar";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inicio" element={<PageWithNavbar />} />
      </Routes>
    </>
  );
}

export default App;
