import React, { useEffect, useState, useRef } from 'react';

const InteractiveBackground = () => {
  const [particles, setParticles] = useState([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 6,
      size: Math.random() * 2 + 1,
    }));
    setParticles(initialParticles);

    // Optimized mouse move handler
    let isMoving = false;
    const handleMouseMove = (e) => {
      if (!isMoving && cursorRef.current) {
        isMoving = true;
        requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.left = `${e.clientX - 10}px`;
            cursorRef.current.style.top = `${e.clientY - 10}px`;
          }
          isMoving = false;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="cursor" 
        style={{
          left: '-100px',
          top: '-100px',
        }}
      />
      <div className="interactive-bg">
        <div className="bg-grid" />
        <div className="floating-particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                animationDelay: `${particle.delay}s`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default InteractiveBackground;