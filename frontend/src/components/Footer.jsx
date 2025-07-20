import React from 'react';
import { Github, Linkedin, Twitter, Shield, Heart } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="dark-content-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Shield size={32} />
              <span className="pixelated-text heading-2">JAYANTH.DEV</span>
            </div>
            <p className="pixelated-text body-small text-muted">
              {data?.message || 'Built with security in mind.'}
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="pixelated-text body-medium">NAVIGATION</h4>
              <ul className="footer-nav">
                <li>
                  <button 
                    className="footer-link pixelated-text body-small"
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  >
                    ABOUT
                  </button>
                </li>
                <li>
                  <button 
                    className="footer-link pixelated-text body-small"
                    onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                  >
                    SKILLS
                  </button>
                </li>
                <li>
                  <button 
                    className="footer-link pixelated-text body-small"
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  >
                    PROJECTS
                  </button>
                </li>
                <li>
                  <button 
                    className="footer-link pixelated-text body-small"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    CONTACT
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="pixelated-text body-medium">SERVICES</h4>
              <ul className="footer-nav">
                <li><span className="footer-link pixelated-text body-small">PENETRATION_TESTING</span></li>
                <li><span className="footer-link pixelated-text body-small">SECURITY_AUDITS</span></li>
                <li><span className="footer-link pixelated-text body-small">SECURE_DEVELOPMENT</span></li>
                <li><span className="footer-link pixelated-text body-small">COMPLIANCE_CONSULTING</span></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="pixelated-text body-medium">CONNECT</h4>
              <div className="footer-social">
                <a 
                  href={data?.social?.github || '#'} 
                  className="social-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={data?.social?.linkedin || '#'} 
                  className="social-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={data?.social?.twitter || '#'} 
                  className="social-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
              <p className="pixelated-text body-small text-muted">
                JAYANTH.TATINENI@CYBERSEC.DEV
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p className="pixelated-text body-small text-muted">
              {data?.copyright || `© ${currentYear} Jayanth Tatineni. All rights reserved.`}
            </p>
            <div className="footer-made-with">
              <span className="pixelated-text body-small text-muted">MADE_WITH</span>
              <Heart size={14} className="heart-icon" />
              <span className="pixelated-text body-small text-muted">AND_SECURE_CODE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;