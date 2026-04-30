import React from 'react';


const About = () => {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About E-Cart</h1>
        <p>Your trusted online shopping partner</p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="about-story-text">
          <h2>Our Story</h2>
          <p>
            E-Cart was founded with a mission to provide high-quality products
            at affordable prices. We aim to deliver a seamless online shopping
            experience with fast delivery and excellent customer service.
          </p>
        </div>
        <div className="about-story-image"></div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="mission-box">
          <h3>Our Mission</h3>
          <p>To make shopping simple, affordable, and accessible for everyone.</p>
        </div>
        <div className="mission-box">
          <h3>Our Vision</h3>
          <p>To become the most loved e-commerce platform worldwide.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">John Doe</div>
          <div className="team-card">Jane Smith</div>
          <div className="team-card">Alex Lee</div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="about-footer">
        <p>© 2026 E-Cart. All rights reserved.</p>
      </section>

    </div>
  );
};

export default About;

