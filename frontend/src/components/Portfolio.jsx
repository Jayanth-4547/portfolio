import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with mock data
    const loadData = async () => {
      try {
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(mockData);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="dark-container loading-container">
        <div className="loading-spinner">
          <div className="pixelated-text display-large">LOADING...</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="dark-container error-container">
        <div className="error-message">
          <div className="pixelated-text display-large">ERROR_404</div>
        </div>
      </div>
    );
  }

  return (
    <div className="dark-container">
      <Header />
      <main className="main-content">
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Contact data={data.contact} />
      </main>
      <Footer data={data.footer} />
    </div>
  );
};

export default Portfolio;