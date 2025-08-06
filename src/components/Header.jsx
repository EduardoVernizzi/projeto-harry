import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="header-main navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="nome-principal" href="#">Harry Potter</a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarCentered"
          aria-expanded={navbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`} id="navbarCentered">
          <ul className="navbar-nav mx-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" onClick={closeNavbar}>Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#chapeu-seletor" onClick={closeNavbar}>Chápeu seletor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#materiais" onClick={closeNavbar}>Materiais</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aulas" onClick={closeNavbar}>Aulas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cta-final" onClick={closeNavbar}>Começar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
