import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Code2, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`dark-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
          <div className="logo-section" onClick={() => scrollToSection('hero')}>
            <Shield className="logo-icon" size={28} />
            <span className="mono-bold heading-2">JAYANTH.DEV</span>
          </div>

          <nav className="dark-nav desktop-nav">
            <button 
              className="nav-link mono-medium" 
              onClick={() => scrollToSection('about')}
            >
              ABOUT
            </button>
            <button 
              className="nav-link mono-medium" 
              onClick={() => scrollToSection('skills')}
            >
              SKILLS
            </button>
            <button 
              className="nav-link mono-medium" 
              onClick={() => scrollToSection('projects')}
            >
              PROJECTS
            </button>
            <button 
              className="nav-link mono-medium" 
              onClick={() => scrollToSection('contact')}
            >
              CONTACT
            </button>
          </nav>

          <div className="header-actions">
            <button 
              className="btn-primary mono-medium interactive-element"
              onClick={() => scrollToSection('contact')}
            >
              <Mail size={16} />
              HIRE_ME
            </button>
            <button 
              className="btn-secondary mono-medium interactive-element"
              onClick={() => window.open('mailto:jayanth@example.com', '_blank')}
            >
              <Code2 size={16} />
              VIEW_CV
            </button>
          </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <button 
              className="mobile-nav-link pixelated-text" 
              onClick={() => scrollToSection('about')}
            >
              ABOUT
            </button>
            <button 
              className="mobile-nav-link pixelated-text" 
              onClick={() => scrollToSection('skills')}
            >
              SKILLS
            </button>
            <button 
              className="mobile-nav-link pixelated-text" 
              onClick={() => scrollToSection('projects')}
            >
              PROJECTS
            </button>
            <button 
              className="mobile-nav-link pixelated-text" 
              onClick={() => scrollToSection('contact')}
            >
              CONTACT
            </button>
            <div className="mobile-actions">
              <button 
                className="btn-primary pixelated-text"
                onClick={() => scrollToSection('contact')}
              >
                <Mail size={18} />
                HIRE_ME
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;