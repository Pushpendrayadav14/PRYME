import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Blogs.css';

const placeholders = [
  { _id: '1', title: 'Understanding Home Loan Interest Rates in 2025', excerpt: 'A comprehensive guide to navigating the home loan landscape with the latest rate changes.', category: 'Finance', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=360&fit=crop', author: 'Pryme Team', createdAt: new Date().toISOString() },
  { _id: '2', title: 'Why Every Family Needs a Term Insurance Plan', excerpt: 'Term insurance is the most cost-effective way to secure your family\'s financial future.', category: 'Insurance', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=360&fit=crop', author: 'Pryme Team', createdAt: new Date().toISOString() },
  { _id: '3', title: 'MSME Loans: A Complete Guide for Small Businesses', excerpt: 'Everything you need to know about MSME financing options and how to qualify.', category: 'Finance', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=360&fit=crop', author: 'Pryme Team', createdAt: new Date().toISOString() },
  { _id: '4', title: 'Real Estate Investment Tips for First-Time Buyers', excerpt: 'Key considerations when purchasing your first property in India\'s evolving real estate market.', category: 'Property', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=360&fit=crop', author: 'Pryme Team', createdAt: new Date().toISOString() },
];

const categories = ['All', 'Finance', 'Insurance', 'Legal', 'Property', 'General'];

const Blogs = () => {
  const [blogs, setBlogs] = useState(placeholders);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    axios.get('/api/blogs').then(res => { if (res.data.length) setBlogs([...placeholders, ...res.data]); }).catch(() => {});
  }, []);

  const filtered = category === 'All' ? blogs : blogs.filter(b => b.category === category);

  return (
    <div className="blogs-page">
      <div className="blogs-hero">
        <div className="container">
          <span className="section-label">Articles</span>
          <h1 className="section-title">In-depth Blog Posts</h1>
          <p>Stay informed with expert insights on finance, insurance, legal matters, and property.</p>
        </div>
      </div>

      <div className="container blogs-body">
        <div className="blog-filters">
          {categories.map(c => (
            <button key={c} className={`filter-btn ${category === c ? 'active' : ''}`} onClick={() => setCategory(c)}>{c}</button>
          ))}
        </div>

        <div className="blogs-grid-full">
          {filtered.map(b => (
            <div key={b._id} className="blog-card-full">
              <img src={b.image || 'https://placehold.co/600x360'} alt={b.title} />
              <div className="blog-card-body">
                <span className="blog-tag">{b.category}</span>
                <h2>{b.title}</h2>
                <p>{b.excerpt}</p>
                <div className="blog-meta">
                  <span>✍️ {b.author}</span>
                  <span>📅 {new Date(b.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <Link to={`/blogs/${b._id}`} className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
