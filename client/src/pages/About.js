import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div style={{paddingTop:80}}>
    <div style={{background:'linear-gradient(135deg,#f0f8e8,#fffef0)',padding:'80px 0 60px',textAlign:'center',borderBottom:'1px solid #ddeec8'}}>
      <div className="container">
        <span className="section-label">About Us</span>
        <h1 className="section-title">One Firm. Infinite Solutions.</h1>
        <p className="section-sub" style={{margin:'12px auto 0'}}>
          Pryme Consulting is a multidisciplinary advisory firm dedicated to simplifying financial, legal, and real estate decisions for individuals and businesses across India.
        </p>
      </div>
    </div>

    <section className="section">
      <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
        <div>
          <span className="section-label">Our Story</span>
          <h2 className="section-title">Trusted Financial Guidance Since 2015</h2>
          <p style={{color:'#5a6a4a',lineHeight:1.8,marginBottom:16}}>
            Founded with the vision of making financial services accessible and transparent, Pryme Consulting has grown into a full-spectrum advisory firm serving clients across India.
          </p>
          <p style={{color:'#5a6a4a',lineHeight:1.8,marginBottom:28}}>
            We believe every individual and business deserves honest, unbiased advice — and our team of experts delivers exactly that across four core verticals: finance, insurance, legal, and property.
          </p>
          <Link to="/contact" className="btn btn-primary arr">Work With Us</Link>
        </div>
        <div style={{background:'#e8f5e0',borderRadius:24,height:360,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'6rem'}}>
          🤝
        </div>
      </div>
    </section>

    <section className="section" style={{background:'#f5fff0',borderTop:'1px solid #ddeec8'}}>
      <div className="container">
        <div style={{textAlign:'center',marginBottom:48}}>
          <span className="section-label">Our Values</span>
          <h2 className="section-title">What We Stand For</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
          {[
            {icon:'🤝',t:'Transparency',d:'Clear, honest guidance with no hidden agendas or undisclosed commissions.'},
            {icon:'🎯',t:'Client-First',d:'Every recommendation is tailored to your unique goals, not our convenience.'},
            {icon:'🏆',t:'Excellence',d:'Deep expertise and continuous learning in every client engagement.'},
          ].map(v=>(
            <div key={v.t} style={{background:'white',borderRadius:16,padding:32,textAlign:'center',border:'1.5px solid #ddeec8'}}>
              <div style={{fontSize:40,marginBottom:16}}>{v.icon}</div>
              <h3 style={{color:'#1a4001',marginBottom:10,fontWeight:700}}>{v.t}</h3>
              <p style={{color:'#5a6a4a',fontSize:14,lineHeight:1.7}}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div style={{textAlign:'center',marginBottom:48}}>
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Meet the Experts Behind Pryme</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:28}}>
          {[
            {name:'Rajesh Kumar',role:'Founder & CEO'},
            {name:'Sunita Patel',role:'Head of Insurance Advisory'},
            {name:'Arun Mehta',role:'Legal & Property Expert'},
          ].map(m=>(
            <div key={m.name} style={{background:'#f5f8f2',borderRadius:16,padding:28,textAlign:'center',border:'1.5px solid #ddeec8'}}>
              <div style={{width:80,height:80,borderRadius:'50%',background:'#1a4001',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,fontWeight:800,margin:'0 auto 16px',border:'3px solid #e8a020'}}>{m.name[0]}</div>
              <h3 style={{color:'#1a4001',marginBottom:4,fontWeight:700}}>{m.name}</h3>
              <p style={{color:'#888',fontSize:14}}>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
