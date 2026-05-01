import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="footer-logo">PR<span className="f-rupee">₹</span>YME<br/><small style={{fontSize:'9px',letterSpacing:'4px',fontWeight:800,opacity:.7}}>CONSULTING</small></div>
        <p>A multidisciplinary advisory firm offering tailored solutions across finance, insurance, real estate, and legal documentation services.</p>
        <div className="footer-social">
          <a href="#!" aria-label="Facebook">📘</a>
          <a href="#!" aria-label="Instagram">📷</a>
          <a href="#!" aria-label="LinkedIn">💼</a>
          <a href="#!" aria-label="WhatsApp">💬</a>
        </div>
      </div>

      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/msme">MSME</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blogs">Articles</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Services</h4>
        <ul>
          <li><Link to="/services#money">PrymeMoney</Link></li>
          <li><Link to="/services#insurance">PrymeInsurance</Link></li>
          <li><Link to="/services#legal">PrymeLegal</Link></li>
          <li><Link to="/services#property">PrymeProperty</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <p>📍 Indore, Madhya Pradesh</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ info@prymeconsulting.in</p>
        <p>🕐 Mon–Sat: 9 AM – 7 PM</p>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <p>© 2025 Pryme Consulting. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/terms">Terms & Conditions</Link>
          <a href="#!">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
