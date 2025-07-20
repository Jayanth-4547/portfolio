import React, { useEffect, useState } from 'react';

const InteractiveBackground = () => {
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 6,
      size: Math.random() * 2 + 1,
    }));
    setParticles(initialParticles);

    // Simple mouse move handler
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className="cursor" 
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
        }}
      />

      {/* Interactive Background */}
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