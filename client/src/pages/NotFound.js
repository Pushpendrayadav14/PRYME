import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #e8f2ff, #fef9f0)',
    textAlign: 'center',
    padding: '24px'
  }}>
    <div>
      <div style={{ fontSize: '6rem', marginBottom: '16px' }}>404</div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#1a3c5e', fontSize: '2rem', marginBottom: '16px' }}>
        Page Not Found
      </h1>
      <p style={{ color: '#666', marginBottom: '32px', fontSize: '16px' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">← Back to Home</Link>
    </div>
  </div>
);

export default NotFound;
