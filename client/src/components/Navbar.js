import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const services = [
    { label: 'PrymeMoney', path: '/services#money' },
    { label: 'PrymeInsurance', path: '/services#insurance' },
    { label: 'PrymeLegal', path: '/services#legal' },
    { label: 'PrymeProperty', path: '/services#property' },
  ];

  const active = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">

        {/* Logo */}
        <Link to="/" className="logo-wrap">
          <div className="logo-stack">
            <div className="logo-icon">
              <span className="pr">PR</span><span className="rupee">₹</span><span className="yme">YME</span>
            </div>
            <span className="logo-sub">Consulting</span>
          </div>
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={active('/')}>Home</Link></li>
          <li><Link to="/msme" className={active('/msme')}>MSME</Link></li>
          <li><Link to="/about" className={active('/about')}>About</Link></li>

          <li
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span>Services +</span>
            {servicesOpen && (
              <ul className="dropdown-menu">
                {services.map(s => (
                  <li key={s.label}><Link to={s.path}>{s.label}</Link></li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/terms" className={active('/terms')}>Terms & Conditions</Link></li>
          <li><Link to="/contact" className="nav-cta">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
