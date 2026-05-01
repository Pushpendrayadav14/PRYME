import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const placeholders = {
  '1': { title: 'Understanding Home Loan Interest Rates in 2025', content: 'Home loan interest rates in India have seen significant changes in 2025. The Reserve Bank of India\'s monetary policy decisions have directly impacted the rates offered by banks and NBFCs.\n\nFixed rates typically range from 8.5% to 11%, while floating rates can be lower in the short term but carry uncertainty. Choosing between fixed and floating depends on your risk appetite and financial planning horizon.\n\nKey factors that affect your home loan rate include: your credit score (CIBIL), loan-to-value ratio, income stability, the lender\'s benchmark rate, and whether you\'re a salaried or self-employed individual.\n\nPryme Consulting can help you compare rates across 15+ lenders to ensure you get the best deal tailored to your profile.', category: 'Finance', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=450&fit=crop', author: 'Pryme Team', createdAt: new Date().toISOString() },
};

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (placeholders[id]) { setBlog(placeholders[id]); return; }
    axios.get(`/api/blogs/${id}`).then(res => setBlog(res.data)).catch(() => {});
  }, [id]);

  if (!blog) return <div style={{ padding: '200px 0', textAlign: 'center' }}>Loading...</div>;

  return (
    <div style={{ paddingTop: 80 }}>
      <div style={{ background: 'linear-gradient(135deg,#e8f2ff,#fef9f0)', padding: '60px 0 40px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">{blog.category}</span>
          <h1 className="section-title" style={{ maxWidth: 700, margin: '8px auto 0' }}>{blog.title}</h1>
          <div style={{ color: '#888', fontSize: 14, marginTop: 12 }}>✍️ {blog.author} · 📅 {new Date(blog.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: 800, padding: '48px 24px' }}>
        <img src={blog.image} alt={blog.title} style={{ width: '100%', borderRadius: 16, marginBottom: 32, maxHeight: 400, objectFit: 'cover' }} />
        {blog.content.split('\n\n').map((para, i) => (
          <p key={i} style={{ lineHeight: 1.8, color: '#444', marginBottom: 20, fontSize: 16 }}>{para}</p>
        ))}
        <div style={{ marginTop: 40, padding: 28, background: '#f6f9fc', borderRadius: 16, borderLeft: '4px solid #e8a020' }}>
          <strong style={{ color: '#1a3c5e' }}>Need expert advice?</strong>
          <p style={{ margin: '8px 0 16px', color: '#666' }}>Book a free consultation with our financial advisors today.</p>
          <Link to="/contact" className="btn btn-primary">Get Free Consultation →</Link>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/blogs" style={{ color: '#1a3c5e', fontWeight: 600 }}>← Back to all articles</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
