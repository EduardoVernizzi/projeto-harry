import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const FinalCall = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const targetDate = new Date('2025-09-01T11:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmbarcar = () => {
    // Adiciona a fonte Cinzel ao documento
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap";
    document.head.appendChild(link);

    link.onload = () => {
      Swal.fire({
        title: '🚂 Embarque autorizado!',
        text: 'Você embarcou no Expresso de Hogwarts. Prepare-se para a magia!',
        imageUrl: 'https://images5.alphacoders.com/120/1207344.jpg',
        imageWidth: 400,
        imageHeight: 250,
        background: '#1a1a1a',
        color: '#f5e050',
        confirmButtonColor: '#d4af37',
        confirmButtonText: 'Partir agora!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        }
      }).then(() => {
        // Fade-out da página (branco)
        document.body.style.transition = "opacity 2s ease-in-out";
        document.body.style.opacity = 0;
        document.body.style.backgroundColor = "white";

        // Espera o fade-out completar antes de:
        setTimeout(() => {
          // Inicia o fade-in da página
          document.body.style.transition = "opacity 2s ease-in-out";
          document.body.style.opacity = 1;
          document.body.style.backgroundColor = "";

          // Agora, após o fade-in, vamos mover a página para o topo
          if (typeof window !== "undefined" && window.scrollTo) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }
        }, 2000); // O tempo de espera é o mesmo do fade-out
      });
    };
  };

  return (
    <>
      <section className="cta-final">
        <div className="cta-container">
          <h2>O Expresso de Hogwarts parte em breve...</h2>
          <h3 className="subtexto">Prepare sua mala e esteja na plataforma 9¾ a tempo!</h3>

          {timeLeft ? (
            <div className="countdown-timer">
              {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
            </div>
          ) : (
            <div className="countdown-timer">🚂 O trem já partiu!</div>
          )}

          <button type="button" className="cta-botao" onClick={handleEmbarcar}>
            🚂 Embarcar agora no Expresso
          </button>
        </div>
      </section>

      <footer className="footer" style={{ padding: '1rem', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Carlos Eduardo Vernizzi. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default FinalCall;

