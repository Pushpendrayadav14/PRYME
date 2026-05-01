import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './AdminDashboard.css';

const api = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

// ── Sidebar ──────────────────────────────────────────────────────────────────
const Sidebar = ({ active, setActive, logout }) => {
  const items = [
    { id: 'overview', icon: '📊', label: 'Overview' },
    { id: 'contacts', icon: '📬', label: 'Enquiries' },
    { id: 'blogs', icon: '📝', label: 'Blog Posts' },
    { id: 'new-blog', icon: '✏️', label: 'New Post' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Pryme<span>Admin</span></div>
      <nav className="sidebar-nav">
        {items.map(i => (
          <button
            key={i.id}
            className={`sidebar-btn ${active === i.id ? 'active' : ''}`}
            onClick={() => setActive(i.id)}
          >
            <span>{i.icon}</span> {i.label}
          </button>
        ))}
      </nav>
      <button className="sidebar-logout" onClick={logout}>🚪 Logout</button>
    </aside>
  );
};

// ── Overview ─────────────────────────────────────────────────────────────────
const Overview = ({ contacts, blogs }) => {
  const stats = [
    { label: 'Total Enquiries', value: contacts.length, icon: '📬', color: '#e8f4fd' },
    { label: 'Blog Posts', value: blogs.length, icon: '📝', color: '#fff8ec' },
    { label: 'This Week Enquiries', value: contacts.filter(c => new Date(c.createdAt) > new Date(Date.now() - 7 * 86400000)).length, icon: '📅', color: '#f0fdf4' },
    { label: 'Most Requested', value: (() => { const counts = {}; contacts.forEach(c => { counts[c.service] = (counts[c.service] || 0) + 1; }); return Object.entries(counts).sort((a,b) => b[1]-a[1])[0]?.[0] || '—'; })(), icon: '🏆', color: '#fdf4ff' },
  ];

  return (
    <div className="dash-section">
      <h2>Dashboard Overview</h2>
      <div className="stats-grid">
        {stats.map(s => (
          <div key={s.label} className="stat-card" style={{ background: s.color }}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: 40, marginBottom: 16, color: '#1a3c5e' }}>Recent Enquiries</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>Email</th><th>Service</th><th>Date</th></tr>
          </thead>
          <tbody>
            {contacts.slice(0, 5).map(c => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td><span className="tag">{c.service || 'General'}</span></td>
                <td>{new Date(c.createdAt).toLocaleDateString('en-IN')}</td>
              </tr>
            ))}
            {contacts.length === 0 && <tr><td colSpan={4} style={{ textAlign: 'center', color: '#999', padding: 24 }}>No enquiries yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ── Contacts ─────────────────────────────────────────────────────────────────
const Contacts = ({ contacts, onDelete }) => (
  <div className="dash-section">
    <h2>All Enquiries <span className="count-badge">{contacts.length}</span></h2>
    <div className="table-wrap">
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th><th>Service</th><th>Message</th><th>Date</th><th>Action</th></tr>
        </thead>
        <tbody>
          {contacts.map(c => (
            <tr key={c._id}>
              <td><strong>{c.name}</strong></td>
              <td>{c.email}</td>
              <td>{c.phone || '—'}</td>
              <td><span className="tag">{c.service || 'General'}</span></td>
              <td className="msg-cell">{c.message}</td>
              <td>{new Date(c.createdAt).toLocaleDateString('en-IN')}</td>
              <td>
                <button className="del-btn" onClick={() => onDelete(c._id)}>🗑️</button>
              </td>
            </tr>
          ))}
          {contacts.length === 0 && <tr><td colSpan={7} style={{ textAlign: 'center', color: '#999', padding: 24 }}>No enquiries yet</td></tr>}
        </tbody>
      </table>
    </div>
  </div>
);

// ── Blogs List ────────────────────────────────────────────────────────────────
const BlogsList = ({ blogs, onDelete }) => (
  <div className="dash-section">
    <h2>Blog Posts <span className="count-badge">{blogs.length}</span></h2>
    <div className="blogs-admin-list">
      {blogs.map(b => (
        <div key={b._id} className="blog-admin-row">
          <img src={b.image || 'https://placehold.co/80x60'} alt={b.title} />
          <div className="blog-admin-info">
            <strong>{b.title}</strong>
            <span>{b.category} · {b.author} · {new Date(b.createdAt).toLocaleDateString('en-IN')}</span>
            <p>{b.excerpt}</p>
          </div>
          <button className="del-btn" onClick={() => onDelete(b._id)}>🗑️ Delete</button>
        </div>
      ))}
      {blogs.length === 0 && <p style={{ color: '#999', textAlign: 'center', padding: 32 }}>No blog posts yet. Create one!</p>}
    </div>
  </div>
);

// ── New Blog Form ─────────────────────────────────────────────────────────────
const NewBlog = ({ token, onCreated }) => {
  const [form, setForm] = useState({ title: '', excerpt: '', content: '', category: 'Finance', author: 'Pryme Team', image: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/blogs', form, api(token));
      setStatus({ type: 'success', msg: '✅ Blog post created successfully!' });
      setForm({ title: '', excerpt: '', content: '', category: 'Finance', author: 'Pryme Team', image: '' });
      onCreated();
    } catch (err) {
      setStatus({ type: 'error', msg: '❌ ' + (err.response?.data?.error || 'Failed to create post') });
    }
    setLoading(false);
  };

  const f = (name) => ({
    value: form[name],
    onChange: e => setForm({ ...form, [name]: e.target.value })
  });

  return (
    <div className="dash-section">
      <h2>Create New Blog Post</h2>
      {status && <div className={`alert ${status.type}`}>{status.msg}</div>}
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="form-row-2">
          <div className="form-group">
            <label>Title *</label>
            <input {...f('title')} required placeholder="Post title" />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select {...f('category')}>
              {['Finance','Insurance','Legal','Property','General'].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="form-row-2">
          <div className="form-group">
            <label>Author</label>
            <input {...f('author')} placeholder="Author name" />
          </div>
          <div className="form-group">
            <label>Cover Image URL</label>
            <input {...f('image')} placeholder="https://..." />
          </div>
        </div>
        <div className="form-group">
          <label>Excerpt *</label>
          <input {...f('excerpt')} required placeholder="Short description shown in listing" />
        </div>
        <div className="form-group">
          <label>Content * (separate paragraphs with blank lines)</label>
          <textarea {...f('content')} required rows={10} placeholder="Full article content..." />
        </div>
        <button type="submit" className="submit-blog-btn" disabled={loading}>
          {loading ? 'Publishing...' : '🚀 Publish Post'}
        </button>
      </form>
    </div>
  );
};

// ── Main Dashboard ────────────────────────────────────────────────────────────
const AdminDashboard = () => {
  const [active, setActive] = useState('overview');
  const [contacts, setContacts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { token, username, logout } = useAuth();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const [cRes, bRes] = await Promise.all([
        axios.get('/api/contacts', api(token)),
        axios.get('/api/blogs'),
      ]);
      setContacts(cRes.data);
      setBlogs(bRes.data);
    } catch (err) {
      if (err.response?.status === 401) { logout(); navigate('/admin'); }
    }
  };

  useEffect(() => { fetchData(); }, []);

  const deleteContact = async (id) => {
    if (!window.confirm('Delete this enquiry?')) return;
    await axios.delete(`/api/contacts/${id}`, api(token));
    setContacts(c => c.filter(x => x._id !== id));
  };

  const deleteBlog = async (id) => {
    if (!window.confirm('Delete this blog post?')) return;
    await axios.delete(`/api/blogs/${id}`, api(token));
    setBlogs(b => b.filter(x => x._id !== id));
  };

  return (
    <div className="admin-layout">
      <Sidebar active={active} setActive={setActive} logout={() => { logout(); navigate('/admin'); }} />
      <main className="admin-main">
        <div className="admin-topbar">
          <h1>{active === 'overview' ? 'Overview' : active === 'contacts' ? 'Enquiries' : active === 'blogs' ? 'Blog Posts' : 'New Post'}</h1>
          <div className="admin-user">👤 {username}</div>
        </div>
        <div className="admin-content">
          {active === 'overview' && <Overview contacts={contacts} blogs={blogs} />}
          {active === 'contacts' && <Contacts contacts={contacts} onDelete={deleteContact} />}
          {active === 'blogs' && <BlogsList blogs={blogs} onDelete={deleteBlog} />}
          {active === 'new-blog' && <NewBlog token={token} onCreated={() => { fetchData(); setActive('blogs'); }} />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
