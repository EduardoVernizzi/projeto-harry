import React, { useState } from 'react';
import MusicPlayer from './components/Music';
import Header from './components/Header';
import CasasHogwarts from './components/CasaHogwarts';
import Materiais from './components/Materiais';
import Aulas from './components/Aulas';
import FinalCall from './components/FinalCall';

function App() {
  const [pageOpacity, setPageOpacity] = useState(1);

  return (
    <div style={{ transition: 'opacity 2s ease-in-out', opacity: pageOpacity }}>
      <MusicPlayer />
      <Header />

      <section className="chamada-principal">
        <div className="box-main">
          <h1 className="titulo-chamada">Você recebeu sua carta?</h1>
          <p className="paragrafo-chamada">
            Descubra sua casa, prepare seu material e embarque para Hogwarts
          </p>
          <a href="#chapeu-seletor" className="btn-next-section">
            Próxima seção
          </a>
        </div>
      </section>

      <section id="chapeu-seletor">
        <CasasHogwarts />
      </section>

      <section id="materiais">
        <Materiais />
      </section>

      <section id="aulas">
        <div className="container">
          <h2 className="mb-3 text-center fs-3 fs-md-2">
            Esses serão seus professores:
          </h2>
          <Aulas />
        </div>
      </section>

      <section id="cta-final">
        <FinalCall setPageOpacity={setPageOpacity} />
      </section>
    </div>
  );
}

export default App;
