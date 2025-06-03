import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const audioSrc = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // define volume baixo ao montar
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log('Erro ao tentar tocar áudio:', error);
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={audioSrc} type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
        className="btn btn-warning rounded-circle position-fixed"
        style={{
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          fontSize: '24px',
          boxShadow: '0 0 10px #ffd700',
          zIndex: 1050,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
          lineHeight: 1,
        }}
      >
        {isPlaying ? '🔊' : '🔈'}
      </button>
    </>
  );
}
