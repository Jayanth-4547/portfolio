import React, { useState } from 'react';
import { Terminal, Code, Shield, Cloud, Zap } from 'lucide-react';

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const getCategoryIcon = (name) => {
    switch (name) {
      case 'SECURITY_TOOLS':
        return Shield;
      case 'PROGRAMMING':
        return Code;
      case 'FRAMEWORKS':
        return Terminal;
      case 'CLOUD_SECURITY':
        return Cloud;
      case 'SPECIALIZATIONS':
        return Zap;
      default:
        return Terminal;
    }
  };

  const categories = data?.categories || [];

  return (
    <section id="skills" className="section-padding">
      <div className="dark-content-container">
        <div className="section-header">
          <h2 className="pixelated-text display-large brand-text">
            {data?.title || 'TECHNICAL_SKILLS'}
          </h2>
          <p className="pixelated-text body-large text-secondary">
            Comprehensive toolkit for modern cybersecurity challenges
          </p>
        </div>

        <div className="skills-container">
          <div className="skills-categories">
            {categories.map((category, index) => {
              const IconComponent = getCategoryIcon(category.name);
              return (
                <button
                  key={index}
                  className={`category-button ${activeCategory === index ? 'active' : ''}`}
                  onClick={() => setActiveCategory(index)}
                >
                  <IconComponent size={24} />
                  <span className="pixelated-text body-medium">{category.name}</span>
                  <div className="category-indicator"></div>
                </button>
              );
            })}
          </div>

          <div className="skills-content">
            {categories[activeCategory] && (
              <div className="skills-grid">
                <div className="category-header">
                  <div className="category-title">
                    {React.createElement(getCategoryIcon(categories[activeCategory].name), { size: 32 })}
                    <h3 className="pixelated-text heading-2">{categories[activeCategory].name}</h3>
                  </div>
                </div>
                
                <div className="skills-items">
                  {categories[activeCategory].items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <span className="pixelated-text body-medium">{skill}</span>
                      <div className="skill-indicator">
                        <div className="skill-progress"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="skills-showcase">
          <div className="showcase-item">
            <div className="showcase-icon">
              <Terminal size={48} />
            </div>
            <div className="showcase-content">
              <h4 className="pixelated-text heading-3">PENETRATION_TESTING</h4>
              <p className="pixelated-text body-small">
                Advanced red team operations and ethical hacking methodologies
              </p>
            </div>
          </div>
          
          <div className="showcase-item">
            <div className="showcase-icon">
              <Shield size={48} />
            </div>
            <div className="showcase-content">
              <h4 className="pixelated-text heading-3">THREAT_ANALYSIS</h4>
              <p className="pixelated-text body-small">
                Comprehensive threat modeling and vulnerability assessment
              </p>
            </div>
          </div>
          
          <div className="showcase-item">
            <div className="showcase-icon">
              <Code size={48} />
            </div>
            <div className="showcase-content">
              <h4 className="pixelated-text heading-3">SECURE_DEVELOPMENT</h4>
              <p className="pixelated-text body-small">
                Security-first approach to application development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;