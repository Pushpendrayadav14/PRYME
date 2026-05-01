import React from 'react';

const Terms = () => (
  <div style={{paddingTop:80}}>
    <div style={{background:'linear-gradient(135deg,#f0f8e8,#fffef0)',padding:'60px 0',borderBottom:'1px solid #ddeec8',textAlign:'center'}}>
      <div className="container">
        <span className="section-label">Legal</span>
        <h1 className="section-title">Terms & Conditions</h1>
        <p style={{color:'#5a6a4a'}}>Last updated: January 2025</p>
      </div>
    </div>
    <div className="container" style={{maxWidth:860,padding:'60px 40px'}}>
      {[
        {t:'1. Acceptance of Terms',c:'By accessing and using the Pryme Consulting website and services, you accept and agree to be bound by these terms. If you do not agree, please do not use our services.'},
        {t:'2. Services Provided',c:'Pryme Consulting provides financial advisory, insurance comparison, legal documentation assistance, and property advisory services. We act as an intermediary and do not directly provide loans, insurance policies, or legal services.'},
        {t:'3. Information Accuracy',c:'While we strive to provide accurate and up-to-date information, Pryme Consulting does not guarantee the completeness or accuracy of any information on this website. Always verify details with the respective financial institution or regulatory authority.'},
        {t:'4. Privacy & Data',c:'We collect personal information solely for the purpose of providing our advisory services. Your data is never sold to third parties. We may share necessary information with partner banks and institutions to process your applications.'},
        {t:'5. No Financial Guarantee',c:'Our advisory services do not guarantee loan approvals, investment returns, or insurance claim settlements. All decisions are at the sole discretion of the respective financial institutions.'},
        {t:'6. Limitation of Liability',c:'Pryme Consulting shall not be liable for any direct, indirect, or consequential damages arising from the use of our services or reliance on information provided on this website.'},
        {t:'7. Contact',c:'For any queries regarding these Terms & Conditions, please contact us at info@prymeconsulting.in or call +91 98765 43210.'},
      ].map(s => (
        <div key={s.t} style={{marginBottom:32}}>
          <h3 style={{color:'#1a4001',fontWeight:700,marginBottom:10,fontSize:'1.05rem'}}>{s.t}</h3>
          <p style={{color:'#5a6a4a',lineHeight:1.8,fontSize:15}}>{s.c}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Terms;
