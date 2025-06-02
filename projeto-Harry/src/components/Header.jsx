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
          data-bs-toggle="collapse"
          data-bs-target="#navbarCentered"
          aria-controls="navbarCentered"
          aria-expanded={navbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}  // Toggle do estado do menu
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`} id="navbarCentered">
          <ul className="navbar-nav mx-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#chapeu-seletor" >Chápeu seletor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#materiais">Materiais</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aulas">Aulas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cta-final">Começar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}