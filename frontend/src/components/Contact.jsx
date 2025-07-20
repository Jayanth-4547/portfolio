import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'consultation'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful submission
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'consultation'
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="dark-content-container">
        <div className="section-header">
          <h2 className="pixelated-text display-large brand-text">
            {data?.title || 'GET_IN_TOUCH'}
          </h2>
          <p className="pixelated-text body-large text-secondary">
            {data?.subtitle || 'Ready to secure your digital assets?'}
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <Mail size={24} className="info-icon" />
              <div className="info-content">
                <h4 className="pixelated-text heading-3">EMAIL</h4>
                <a href={`mailto:${data?.email}`} className="pixelated-text body-medium brand-text">
                  {data?.email || 'jayanth.tatineni@cybersec.dev'}
                </a>
              </div>
            </div>

            <div className="info-item">
              <Phone size={24} className="info-icon" />
              <div className="info-content">
                <h4 className="pixelated-text heading-3">PHONE</h4>
                <a href={`tel:${data?.phone}`} className="pixelated-text body-medium brand-text">
                  {data?.phone || '+1 (555) 123-4567'}
                </a>
              </div>
            </div>

            <div className="info-item">
              <MapPin size={24} className="info-icon" />
              <div className="info-content">
                <h4 className="pixelated-text heading-3">LOCATION</h4>
                <span className="pixelated-text body-medium">
                  {data?.location || 'San Francisco, CA'}
                </span>
              </div>
            </div>

            <div className="availability-card">
              <h4 className="pixelated-text heading-3">AVAILABILITY</h4>
              <p className="pixelated-text body-small">
                {data?.availability || 'Available for consulting and full-time opportunities'}
              </p>
              <div className="status-indicator">
                <div className="status-dot available"></div>
                <span className="pixelated-text body-small">AVAILABLE_NOW</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="pixelated-text body-small">NAME*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input pixelated-text"
                placeholder="ENTER_YOUR_NAME"
                required
              />
            </div>

            <div className="form-group">
              <label className="pixelated-text body-small">EMAIL*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input pixelated-text"
                placeholder="YOUR_EMAIL@DOMAIN.COM"
                required
              />
            </div>

            <div className="form-group">
              <label className="pixelated-text body-small">PROJECT_TYPE</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="form-select pixelated-text"
              >
                <option value="consultation">SECURITY_CONSULTATION</option>
                <option value="audit">SECURITY_AUDIT</option>
                <option value="development">SECURE_DEVELOPMENT</option>
                <option value="training">SECURITY_TRAINING</option>
                <option value="other">OTHER</option>
              </select>
            </div>

            <div className="form-group">
              <label className="pixelated-text body-small">SUBJECT*</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input pixelated-text"
                placeholder="PROJECT_SUBJECT"
                required
              />
            </div>

            <div className="form-group">
              <label className="pixelated-text body-small">MESSAGE*</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea pixelated-text"
                placeholder="DESCRIBE_YOUR_SECURITY_REQUIREMENTS..."
                rows="6"
                required
              />
            </div>

            <button 
              type="submit" 
              className={`btn-primary submit-btn pixelated-text ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  SENDING_MESSAGE...
                </>
              ) : (
                <>
                  <Send size={18} />
                  SEND_MESSAGE
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="status-message success">
                <CheckCircle size={18} />
                <span className="pixelated-text body-small">MESSAGE_SENT_SUCCESSFULLY</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                <AlertCircle size={18} />
                <span className="pixelated-text body-small">ERROR_SENDING_MESSAGE</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;