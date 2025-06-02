import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CasasHogwarts() {
  const houses = [
    { name: "Grifinória", icon: "🦁", color: "#FF0000" },
    { name: "Sonserina", icon: "🐍", color: "#2C6B2F" },
    { name: "Corvinal", icon: "🦅", color: "#1F3B5B" },
    { name: "Lufa-Lufa", icon: "🦡", color: "#F9D03F" }
  ];

  const [selectedHouse, setSelectedHouse] = useState(null);

  // Função para sortear a casa
  const handleSortHouse = () => {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    setSelectedHouse(randomHouse);
  };

  // Função para resetar a seleção
  const handleReset = () => {
    setSelectedHouse(null);
  };

  // Função para rolar até a próxima seção
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('materiais');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="casas-hogwarts" className="section-container text-center py-5">
      {!selectedHouse ? (
        <>
          <h2>Pronto para ser selecionado?</h2>
          <button className="btn btn-casa-selecao" onClick={handleSortHouse}>
            Sortear Casa
          </button>
        </>
      ) : (
        <div className="message-container">

          <img
            src="/hat.gif"  // Coloque seu gif animado do chapéu seletor dentro da pasta public com esse nome
            alt="Chapéu Seletor Animado"
              className="gif-chapeu"
          />

          <p className="lead">
            {selectedHouse.icon} {selectedHouse.name} {selectedHouse.icon}
          </p>
          <h3>Você foi selecionado para a {selectedHouse.name}!</h3>

          {/* Imagem animada do Chapéu Seletor */}

          <button
            className="btn btn-primary me-2"
            style={{ backgroundColor: selectedHouse.color, borderColor: selectedHouse.color }}
            onClick={scrollToNextSection}
          >
            Próxima Seção
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Escolher novamente
          </button>
        </div>
      )}
    </div>
  );
}