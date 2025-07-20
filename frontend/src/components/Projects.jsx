import React, { useState } from 'react';
import { ExternalLink, Github, Play, Lock, CheckCircle, Clock } from 'lucide-react';

const Projects = ({ data }) => {
  const [activeProject, setActiveProject] = useState(0);
  const projects = data || [];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Production':
        return CheckCircle;
      case 'Beta':
        return Clock;
      case 'Open Source':
        return Github;
      default:
        return Lock;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'status-production';
      case 'Beta':
        return 'status-beta';
      case 'Open Source':
        return 'status-opensource';
      default:
        return 'status-private';
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="dark-content-container">
        <div className="section-header">
          <h2 className="pixelated-text display-large brand-text">PROJECTS</h2>
          <p className="pixelated-text body-large text-secondary">
            Security solutions that make a difference
          </p>
        </div>

        {projects.length > 0 && (
          <div className="projects-container">
            <div className="projects-sidebar">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className={`project-tab ${activeProject === index ? 'active' : ''}`}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="project-tab-header">
                    <span className="pixelated-text body-medium">{project.title}</span>
                    <span className={`project-status ${getStatusColor(project.status)}`}>
                      {React.createElement(getStatusIcon(project.status), { size: 16 })}
                    </span>
                  </div>
                  <span className="pixelated-text body-small text-muted">{project.category}</span>
                </button>
              ))}
            </div>

            <div className="project-details">
              {projects[activeProject] && (
                <div className="project-card">
                  <div className="project-header">
                    <div className="project-title-section">
                      <h3 className="pixelated-text display-medium">{projects[activeProject].title}</h3>
                      <span className="pixelated-text body-medium text-secondary">
                        {projects[activeProject].category}
                      </span>
                    </div>
                    <div className={`project-status-badge ${getStatusColor(projects[activeProject].status)}`}>
                      {React.createElement(getStatusIcon(projects[activeProject].status), { size: 20 })}
                      <span className="pixelated-text body-small">{projects[activeProject].status}</span>
                    </div>
                  </div>

                  <p className="pixelated-text body-medium project-description">
                    {projects[activeProject].description}
                  </p>

                  <div className="project-technologies">
                    <h4 className="pixelated-text heading-3">TECH_STACK</h4>
                    <div className="tech-tags">
                      {projects[activeProject].technologies.map((tech, index) => (
                        <span key={index} className="tech-tag pixelated-text body-small">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-features">
                    <h4 className="pixelated-text heading-3">KEY_FEATURES</h4>
                    <ul className="features-list">
                      {projects[activeProject].features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <CheckCircle size={16} className="feature-icon" />
                          <span className="pixelated-text body-small">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {projects[activeProject].impact && (
                    <div className="project-impact">
                      <h4 className="pixelated-text heading-3">IMPACT</h4>
                      <p className="pixelated-text body-medium brand-text">
                        {projects[activeProject].impact}
                      </p>
                    </div>
                  )}

                  <div className="project-actions">
                    <button className="btn-primary pixelated-text">
                      <Play size={18} />
                      VIEW_DEMO
                    </button>
                    <button className="btn-secondary pixelated-text">
                      <Github size={18} />
                      SOURCE_CODE
                    </button>
                    <button className="btn-secondary pixelated-text">
                      <ExternalLink size={18} />
                      LIVE_PROJECT
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="projects-grid">
          <div className="grid-item">
            <div className="grid-icon">
              <Lock size={32} />
            </div>
            <h4 className="pixelated-text heading-3">ENTERPRISE_READY</h4>
            <p className="pixelated-text body-small">
              All projects follow enterprise security standards and compliance requirements.
            </p>
          </div>
          <div className="grid-item">
            <div className="grid-icon">
              <CheckCircle size={32} />
            </div>
            <h4 className="pixelated-text heading-3">BATTLE_TESTED</h4>
            <p className="pixelated-text body-small">
              Proven solutions deployed in production environments with real-world validation.
            </p>
          </div>
          <div className="grid-item">
            <div className="grid-icon">
              <Github size={32} />
            </div>
            <h4 className="pixelated-text heading-3">OPEN_SOURCE</h4>
            <p className="pixelated-text body-small">
              Contributing to the security community through open-source initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;