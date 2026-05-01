import React from 'react';
import { Link } from 'react-router-dom';

const serviceDetails = [
  {
    id: 'money',
    icon: '💰',
    title: 'PrymeMoney',
    tagline: 'Smart Loans. Smarter Decisions.',
    desc: 'We help individuals and businesses access the right financial products — from home loans and personal loans to MSME credit facilities. Our team compares rates across 15+ partner banks to get you the best deal.',
    features: ['Home Loans', 'Personal Loans', 'Business Loans', 'MSME Financing', 'Credit Score Improvement', 'Loan Against Property'],
    color: '#e8f4fd',
    accent: '#1a3c5e',
    img: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=560&h=400&fit=crop',
  },
  {
    id: 'insurance',
    icon: '🛡️',
    title: 'PrymeInsurance',
    tagline: 'Protect What Matters Most.',
    desc: 'Life is unpredictable. We help you build a comprehensive insurance portfolio — from term life and health insurance to general and motor insurance — ensuring you and your family are covered.',
    features: ['Term Life Insurance', 'Health Insurance', 'Motor Insurance', 'General Insurance', 'ULIP Plans', 'Group Insurance'],
    color: '#fff8ec',
    accent: '#e8a020',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=560&h=400&fit=crop',
  },
  {
    id: 'legal',
    icon: '⚖️',
    title: 'PrymeLegal',
    tagline: 'Legal Clarity. Zero Complexity.',
    desc: 'Navigating legal documentation can be daunting. Our legal experts simplify property agreements, registrations, and compliance requirements so you can proceed with confidence.',
    features: ['Property Registration', 'Sale Deed Drafting', 'Legal Due Diligence', 'RERA Compliance', 'Will & Succession Planning', 'NRI Legal Services'],
    color: '#f0fdf4',
    accent: '#15803d',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=560&h=400&fit=crop',
  },
  {
    id: 'property',
    icon: '🏠',
    title: 'PrymeProperty',
    tagline: 'Your Dream Property, Simplified.',
    desc: 'From finding the right property to completing the transaction — we guide buyers, sellers, and investors through every step of the real estate journey with transparent advisory.',
    features: ['Residential Buying/Selling', 'Commercial Properties', 'Investment Advisory', 'Property Valuation', 'Rental Management', 'NRI Property Services'],
    color: '#fdf4ff',
    accent: '#7c3aed',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=560&h=400&fit=crop',
  },
];

const Services = () => (
  <div style={{ paddingTop: 80 }}>
    <div style={{ background: 'linear-gradient(135deg,#e8f2ff,#fef9f0)', padding: '80px 0 60px', textAlign: 'center' }}>
      <div className="container">
        <span className="section-label">What We Offer</span>
        <h1 className="section-title">Our Services</h1>
        <p style={{ color: '#666', maxWidth: 580, margin: '12px auto 0', lineHeight: 1.7 }}>
          Four comprehensive verticals designed to cover every financial need of modern India.
        </p>
      </div>
    </div>

    {serviceDetails.map((s, i) => (
      <section key={s.id} id={s.id} className="section" style={{ background: i % 2 === 0 ? 'white' : '#f6f9fc' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: 64, alignItems: 'center', direction: i % 2 !== 0 ? 'rtl' : 'ltr' }}>
          <div style={{ direction: 'ltr' }}>
            <div style={{ background: s.color, color: s.accent, width: 64, height: 64, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
            <span className="section-label">{s.tagline}</span>
            <h2 className="section-title">{s.title}</h2>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 24 }}>{s.desc}</p>
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px', listStyle: 'none', marginBottom: 28 }}>
              {s.features.map(f => (
                <li key={f} style={{ fontSize: 14, color: '#444', display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ color: s.accent, fontWeight: 700 }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary">Book Free Consultation →</Link>
          </div>
          <div style={{ direction: 'ltr' }}>
            <img src={s.img} alt={s.title} style={{ width: '100%', borderRadius: 20, boxShadow: '0 12px 40px rgba(26,60,94,0.12)' }} />
          </div>
        </div>
      </section>
    ))}
  </div>
);

export default Services;
