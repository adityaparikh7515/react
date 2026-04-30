import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="footer-top">
        <div className="footer-brand">
          <h2>E-Cart</h2>
          <p>Your trusted shopping partner for quality products.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-support">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe for latest updates</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 E-Cart. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;