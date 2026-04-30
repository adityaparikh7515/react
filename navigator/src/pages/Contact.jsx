import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">

      {/* Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you</p>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Info Section */}
      <section className="contact-info">
        <div className="info-box">📍 Ahmedabad, India</div>
        <div className="info-box">📧 support@ecart.com</div>
        <div className="info-box">📞 +91 9876543210</div>
      </section>

    </div>
  );
};

export default Contact;

