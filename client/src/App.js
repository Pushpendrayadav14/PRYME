import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

import Home     from './pages/Home';
import MSME     from './pages/MSME';
import About    from './pages/About';
import Services from './pages/Services';
import Blogs    from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Contact  from './pages/Contact';
import Terms    from './pages/Terms';
import AdminLogin     from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import './App.css';

const PublicLayout = ({ children }) => {
  const loc = useLocation();
  const isAdmin = loc.pathname.startsWith('/admin');
  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <PublicLayout>
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/msme"    element={<MSME />} />
            <Route path="/about"   element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs"   element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms"   element={<Terms />} />
            <Route path="/admin"   element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute><AdminDashboard /></ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PublicLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
