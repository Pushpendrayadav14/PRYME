import React from 'react';
import { Link } from 'react-router-dom';

const schemes = [
  { title:'MUDRA Loan', range:'Up to ₹10 Lakh', desc:'No collateral required. For micro enterprises in manufacturing, trading, and services.', tag:'No Collateral' },
  { title:'CGTMSE Scheme', range:'Up to ₹2 Crore', desc:'Credit guarantee fund for collateral-free loans to MSMEs via partner banks.', tag:'Govt Backed' },
  { title:'Stand-Up India', range:'₹10L – ₹1 Crore', desc:'For SC/ST and women entrepreneurs setting up greenfield enterprises.', tag:'Inclusive' },
  { title:'MSME Term Loan', range:'Up to ₹5 Crore', desc:'For machinery, equipment purchase and business expansion with flexible tenure.', tag:'Low Rate' },
];

const steps = [
  { n:'01', t:'Udyam Registration', d:'Get your MSME registered on the Udyam portal — free, quick, and online.' },
  { n:'02', t:'Documents Preparation', d:'We help you compile all required documents — KYC, business proof, bank statements.' },
  { n:'03', t:'Bank Selection', d:'We match you with the best bank based on your profile and loan requirement.' },
  { n:'04', t:'Loan Disbursal', d:'Fast-track approval with our partner banks. Average disbursement in 7–10 days.' },
];

const MSME = () => (
  <div style={{paddingTop:80}}>
    {/* Hero */}
    <section style={{background:'linear-gradient(135deg,#f0f8e8,#fffef0)',padding:'80px 0',borderBottom:'1px solid #ddeec8'}}>
      <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
        <div>
          <span className="section-label">MSME / STARTUP SOLUTIONS</span>
          <h1 className="section-title">Compliance, Funding, and Clarity<br/>for Every Business</h1>
          <p className="section-sub" style={{marginBottom:28}}>
            Whether you're launching a startup or running a small business, Pryme Consulting helps you
            get registered, compliant, and investment-ready — fast and hassle-free.
          </p>
          <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
            <Link to="/contact" className="btn btn-primary arr">Get Your MSME Registered</Link>
            <Link to="/contact" className="btn btn-outline arr">Talk To A Consultant</Link>
          </div>
        </div>
        <div style={{background:'#ddeec8',borderRadius:24,height:280,display:'flex',alignItems:'center',justifyContent:'center',fontSize:80}}>
          🏭
        </div>
      </div>
    </section>

    {/* Schemes */}
    <section className="section" style={{background:'white'}}>
      <div className="container">
        <div className="section-header-center" style={{textAlign:'center',marginBottom:48}}>
          <span className="section-label">Available Schemes</span>
          <h2 className="section-title">MSME Loan Schemes We Help With</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:24}}>
          {schemes.map(s => (
            <div key={s.title} style={{background:'#f5f8f2',borderRadius:16,padding:28,border:'1.5px solid #ddeec8'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:12}}>
                <h3 style={{color:'#1a4001',fontSize:'1.1rem',fontWeight:700}}>{s.title}</h3>
                <span style={{background:'#e8f5e0',color:'#1a4001',fontSize:11,fontWeight:700,padding:'4px 10px',borderRadius:50}}>{s.tag}</span>
              </div>
              <div style={{fontSize:'1.2rem',fontWeight:800,color:'#e8a020',marginBottom:8}}>{s.range}</div>
              <p style={{color:'#5a6a4a',fontSize:14,lineHeight:1.65}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Steps */}
    <section className="section" style={{background:'#f5fff0',borderTop:'1px solid #ddeec8'}}>
      <div className="container">
        <div style={{textAlign:'center',marginBottom:48}}>
          <span className="section-label">Our Process</span>
          <h2 className="section-title">How We Help You Get Funded</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
          {steps.map(s => (
            <div key={s.n} style={{background:'white',borderRadius:16,padding:28,textAlign:'center',boxShadow:'0 2px 12px rgba(26,64,1,0.07)'}}>
              <div style={{fontSize:'2.5rem',fontWeight:800,color:'#ddeec8',marginBottom:8}}>{s.n}</div>
              <h3 style={{color:'#1a4001',fontWeight:700,marginBottom:8}}>{s.t}</h3>
              <p style={{color:'#5a6a4a',fontSize:13,lineHeight:1.6}}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{background:'#1a4001',padding:'60px 0',textAlign:'center'}}>
      <div className="container">
        <h2 style={{color:'white',fontSize:'2rem',fontWeight:800,marginBottom:12}}>Ready to get your business funded?</h2>
        <p style={{color:'rgba(255,255,255,0.7)',marginBottom:28}}>Free consultation. No hidden charges. Fast approval.</p>
        <Link to="/contact" className="btn btn-accent arr">Start Your Application</Link>
      </div>
    </section>
  </div>
);

export default MSME;
