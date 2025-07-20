import React, { useEffect, useState } from 'react';

const InteractiveBackground = () => {
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorTrails, setCursorTrails] = useState([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 6,
      size: Math.random() * 2 + 1,
    }));
    setParticles(initialParticles);

    // Mouse move handler
    let trailId = 0;
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create cursor trail
      const newTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };
      
      setCursorTrails(prev => {
        const updated = [...prev, newTrail];
        return updated.length > 8 ? updated.slice(-8) : updated;
      });
    };

    // Interactive hover effects
    const handleMouseEnter = (e) => {
      if (e.target.closest('.interactive-element, .btn-primary, .btn-secondary, .clickable')) {
        document.querySelector('.cursor').style.transform = 'scale(1.5)';
        document.querySelector('.cursor').style.borderColor = 'var(--brand-accent)';
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.closest('.interactive-element, .btn-primary, .btn-secondary, .clickable')) {
        document.querySelector('.cursor').style.transform = 'scale(1)';
        document.querySelector('.cursor').style.borderColor = 'var(--brand-primary)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  // Clean up cursor trails
  useEffect(() => {
    const timer = setTimeout(() => {
      setCursorTrails(prev => prev.slice(-5));
    }, 100);
    return () => clearTimeout(timer);
  }, [cursorTrails]);

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
      
      {/* Cursor Trails */}
      {cursorTrails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 3,
            top: trail.y - 3,
            opacity: (index + 1) / cursorTrails.length * 0.5,
            animationDelay: `${index * 0.05}s`,
          }}
        />
      ))}

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