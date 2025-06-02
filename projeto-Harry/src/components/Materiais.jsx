import React from 'react';
import MaterialCard from './MaterialCard';

const materiaisData = [
  {
    name: 'Olivaras',
    image: './src/assets/materiais-varinha.jpg',
    description: 'As varinhas mais poderosas, feitas das madeiras mais raras.',
  },
  {
    name: 'Livro de Feitiços',
    image: './src/assets/materiais-livro.png',
    description: 'Essencial para aprender os feitiços mais importantes.',
  },
  {
    name: 'Caldeirão',
    image: './src/assets/materiais-caldeirao.png',
    description: 'Use para preparar poções mágicas de forma segura.',
  },
  {
    name: 'Roupa de Gala',
    image: './src/assets/materiais-roupa.png',
    description: 'Roupa especial para os eventos mais importantes.',
  },
  {
    name: 'Coruja de entrega',
    image: './src/assets/materiais-coruja.png',
    description: 'Para enviar cartas e itens para os familiares',
  },
  {
    name: 'Vassoura Mágica',
    image: './src/assets/materiais-vassoura.png',
    description: 'Ideal para partidas de Quadribol emocionantes',
  },
];

const Materiais = () => {
  return (
    <div className="py-5 text-light" style={{ background: "#000" }}>
      <div className="container">
        <h2 className="mb-3 text-center fs-3 fs-md-2">
          Estes são seus materiais para o novo semestre
        </h2>
        <p className="mb-5 text-center fs-6 fs-md-5">
          Prepare sua mochila mágica antes de embarcar no Expresso de Hogwarts 🚂
        </p>

        <div className="row g-4">
          {materiaisData.map((item, idx) => (
            <div key={idx} className="col-sm-6 col-md-4 col-lg-3">
              <MaterialCard
                name={item.name}
                image={item.image}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materiais;