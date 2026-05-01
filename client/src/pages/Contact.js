import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/contacts', form);
      setStatus({ type: 'success', msg: '✅ Message sent! We\'ll get back to you within 24 hours.' });
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus({ type: 'error', msg: '❌ Something went wrong. Please try again.' });
    }
    setLoading(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title">We're Here to Help You</h1>
          <p>Reach out for a free consultation. Our advisors will contact you within 24 hours.</p>
        </div>
      </div>

      <div className="container contact-body">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item"><span>📍</span><div><strong>Address</strong><p>Indore, Madhya Pradesh, India</p></div></div>
          <div className="info-item"><span>📞</span><div><strong>Phone</strong><p>+91 98765 43210</p></div></div>
          <div className="info-item"><span>✉️</span><div><strong>Email</strong><p>info@prymeconsulting.in</p></div></div>
          <div className="info-item"><span>🕐</span><div><strong>Business Hours</strong><p>Mon–Sat: 9 AM – 7 PM</p></div></div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>
          {status && <div className={`alert ${status.type}`}>{status.msg}</div>}

          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="form-group">
              <label>Service Interested In</label>
              <select name="service" value={form.service} onChange={handleChange}>
                <option value="">Select a service</option>
                <option>PrymeMoney</option>
                <option>PrymeInsurance</option>
                <option>PrymeLegal</option>
                <option>PrymeProperty</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us how we can help you..." />
          </div>

          <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message →'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
