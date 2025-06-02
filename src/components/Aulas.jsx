import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // necessário para o carrossel funcionar

function Aulas() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://wallpapers.com/images/hd/albus-dumbledore-with-a-wand-x5fqo9eq73k6qv6v.jpg" className="d-block w-100" alt="Albus Dumbledore" />
          <div className="carousel-caption">
            <h5>Albus Dumbledore</h5>
            <p>Dumbledore, o maior bruxo de todos os tempos, guiou Hogwarts com sabedoria, coragem e uma visão de um mundo mais justo, sempre pronto para lutar contra as forças das trevas.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://contentful.harrypotter.com/usf1vwtuqyxm/309g5fnM3VpztMxhXIScmd/d3f0cd37674f68c01be3a933d7b903a8/WB-F5-order-of-phoenix-snape-potions.jpg?q=75&fm=jpg&w=2560" className="d-block w-100" alt="Severus Snape" />
          <div className="carousel-caption">
            <h5>Severus Snape</h5>
            <p>"Um dos personagens mais enigmáticos de Hogwarts. Mestre das Poções e professor de Defesa Contra as Artes das Trevas, Snape foi, por muito tempo, uma figura misteriosa, respeitada, e temida pelos alunos."</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images5.alphacoders.com/121/1218766.jpg" className="d-block w-100" alt="Minerva" />
          <div className="carousel-caption">
            <h5>Minerva McGonagall</h5>
            <p>"Com um olhar rigoroso e um coração generoso, McGonagall é uma das mais respeitadas bruxas de sua geração, sempre pronta para proteger seus alunos enquanto ensina a arte da transfiguração."</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://wallpapers.com/images/hd/rubeus-hagrid-hut-ehqwkwbgg2i3uhyw.jpg" className="d-block w-100" alt="Hagrid" />
          <div className="carousel-caption">
            <h5>Rubeus Hagrid</h5>
            <p>"Hagrid, o gigante de coração puro, leva seus alunos a uma jornada mágica pelo mundo das criaturas fantásticas, sempre com uma história fascinante e um sorriso acolhedor."</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://contentful.harrypotter.com/usf1vwtuqyxm/7i69Kt4D53SmlEspVmOVmV/055fc05219b45558c3cedb8b122af3c8/alastor-mad-eye-moody_1_1800x1248.png" className="d-block w-100" alt="Alastor Moody" />
          <div className="carousel-caption">
            <h5>Alastor Moody</h5>
            <p>"Veterano Auror e mestre em Defesa Contra as Artes das Trevas, Moody era temido pelos bruxos das trevas e respeitado por todos que valorizavam coragem e vigilância."</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Aulas;
