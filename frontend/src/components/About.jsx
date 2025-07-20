import React from 'react';
import { Shield, Award, CheckCircle, Users, Globe, Lock } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" className="section-padding">
      <div className="dark-content-container">
        <div className="section-header">
          <h2 className="pixelated-text display-large brand-text">
            {data?.title || 'ABOUT_ME'}
          </h2>
          <p className="pixelated-text body-large text-secondary">
            {data?.subtitle || 'Cybersecurity Professional & Developer'}
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-description">
              <p className="pixelated-text body-medium">
                {data?.description || 'I am a passionate cybersecurity professional with extensive experience in both offensive and defensive security practices.'}
              </p>
            </div>

            <div className="about-highlights">
              <h3 className="pixelated-text heading-2">CORE_EXPERTISE</h3>
              <div className="highlights-grid">
                {(data?.highlights || []).map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <CheckCircle size={18} className="highlight-icon" />
                    <span className="pixelated-text body-small">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <Shield size={32} className="stat-icon" />
                <div className="stat-content">
                  <span className="pixelated-text heading-2 brand-text">200+</span>
                  <span className="pixelated-text body-small">SECURITY_AUDITS</span>
                </div>
              </div>
              <div className="stat-card">
                <Users size={32} className="stat-icon" />
                <div className="stat-content">
                  <span className="pixelated-text heading-2 brand-text">50+</span>
                  <span className="pixelated-text body-small">CLIENTS_SECURED</span>
                </div>
              </div>
              <div className="stat-card">
                <Globe size={32} className="stat-icon" />
                <div className="stat-content">
                  <span className="pixelated-text heading-2 brand-text">24/7</span>
                  <span className="pixelated-text body-small">MONITORING</span>
                </div>
              </div>
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="pixelated-text heading-2">CERTIFICATIONS</h3>
            <div className="certifications-list">
              {(data?.certifications || []).map((cert, index) => (
                <div key={index} className="certification-item">
                  <Award size={20} className="cert-icon" />
                  <span className="pixelated-text body-small">{cert}</span>
                </div>
              ))}
            </div>

            <div className="security-philosophy">
              <div className="philosophy-card">
                <Lock size={40} className="philosophy-icon" />
                <div className="philosophy-content">
                  <h4 className="pixelated-text heading-3">SECURITY_FIRST</h4>
                  <p className="pixelated-text body-small">
                    "Security is not a product, but a process. Every line of code, 
                    every system design, and every decision must prioritize protection."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;