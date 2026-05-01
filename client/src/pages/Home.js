import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

/* ─── HERO ──────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="hero">
    <div className="container hero-inner">
      <div className="hero-left">
        <p className="hero-tagline"><span className="dot-grid">✦</span> One Firm. Infinite Solutions.</p>
        <h1 className="hero-title">
          Empowering Your<br />
          Future with <span className="yellow-text">Trusted</span><br />
          Financial Solutions
        </h1>
        <p className="hero-desc">
          Pryme Consulting is a multidisciplinary advisory firm offering tailored
          solutions across finance, insurance, real estate, and legal documentation
          services. Our goal is to simplify complex decisions with transparency and expertise.
        </p>
        <div className="hero-btns">
          <Link to="/services" className="btn btn-primary arr">Explore Services</Link>
          <Link to="/contact" className="btn btn-outline arr">Get In Touch</Link>
        </div>
      </div>

      <div className="hero-right">
        {/* Decorative floating icons */}
        <div className="hero-illustration">
          <div className="hero-circle" />
          <div className="float-icon fi-coin">₹</div>
          <div className="float-icon fi-house">🏠</div>
          <div className="float-icon fi-car">🚗</div>
          <div className="float-icon fi-pig">🐷</div>
          <img
            src="https://illustrations.popsy.co/green/man-with-laptop.svg"
            alt="Financial solutions"
            className="hero-img"
            onError={e => { e.target.style.display='none'; }}
          />
          {/* Fallback SVG person */}
          <div className="hero-person-fallback">
            <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="50" r="36" fill="#1a4001"/>
              <rect x="55" y="100" width="90" height="110" rx="20" fill="#1a4001"/>
              <rect x="30" y="105" width="30" height="70" rx="15" fill="#2d6a04"/>
              <rect x="140" y="105" width="30" height="70" rx="15" fill="#2d6a04"/>
              <rect x="65" y="210" width="28" height="60" rx="14" fill="#1a4001"/>
              <rect x="107" y="210" width="28" height="60" rx="14" fill="#1a4001"/>
              <rect x="60" y="130" width="80" height="55" rx="8" fill="#e8f5e0"/>
              <rect x="68" y="140" width="64" height="6" rx="3" fill="#1a4001" opacity=".3"/>
              <rect x="68" y="152" width="48" height="6" rx="3" fill="#1a4001" opacity=".3"/>
              <rect x="68" y="164" width="56" height="6" rx="3" fill="#1a4001" opacity=".3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Decorative rupee symbols floating */}
    <div className="hero-deco deco1">₹</div>
    <div className="hero-deco deco2">₹</div>
  </section>
);

/* ─── MSME HERO BANNER ───────────────────────────────────────────── */
const MsmeBanner = () => (
  <section className="msme-banner">
    <div className="container msme-inner">
      <div className="msme-text">
        <span className="section-label">MSME / STARTUP SOLUTIONS</span>
        <h2 className="section-title">Compliance, Funding, and Clarity<br />for Every Business</h2>
        <p className="section-sub">
          Whether you're launching a startup or running a small business, Pryme Consulting helps you
          get registered, compliant, and investment-ready — fast and hassle-free.
        </p>
        <div className="hero-btns" style={{ marginTop: 28 }}>
          <Link to="/msme" className="btn btn-primary arr">Get Your MSME Registered</Link>
          <Link to="/contact" className="btn btn-outline arr">Talk To A Startup Consultant</Link>
        </div>
      </div>
      <div className="msme-illustration">
        <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:380}}>
          {/* Two people shaking hands */}
          <ellipse cx="160" cy="240" rx="130" ry="20" fill="#e8f5e0" opacity=".5"/>
          {/* Left person */}
          <circle cx="85" cy="60" r="28" fill="#1a4001"/>
          <rect x="55" y="98" width="60" height="80" rx="14" fill="#2d9e2d"/>
          <rect x="32" y="103" width="24" height="55" rx="12" fill="#2d9e2d"/>
          <rect x="84" y="103" width="24" height="55" rx="12" fill="#2d9e2d"/>
          <rect x="62" y="178" width="20" height="50" rx="10" fill="#1a4001"/>
          <rect x="88" y="178" width="20" height="50" rx="10" fill="#1a4001"/>
          {/* Right person */}
          <circle cx="235" cy="70" r="28" fill="#0f1e05"/>
          <rect x="205" y="108" width="60" height="80" rx="14" fill="#2d9e2d"/>
          <rect x="184" y="113" width="24" height="55" rx="12" fill="#2d9e2d"/>
          <rect x="262" y="113" width="24" height="55" rx="12" fill="#2d9e2d"/>
          <rect x="212" y="188" width="20" height="50" rx="10" fill="#0f1e05"/>
          <rect x="238" y="188" width="20" height="50" rx="10" fill="#0f1e05"/>
          {/* Handshake area */}
          <ellipse cx="160" cy="145" rx="22" ry="12" fill="#e8a020" opacity=".9"/>
          {/* Document */}
          <rect x="195" y="148" width="40" height="52" rx="4" fill="#e8f5e0" stroke="#1a4001" strokeWidth="1.5"/>
          <rect x="201" y="158" width="28" height="3" rx="1.5" fill="#1a4001" opacity=".4"/>
          <rect x="201" y="166" width="22" height="3" rx="1.5" fill="#1a4001" opacity=".4"/>
          <rect x="201" y="174" width="26" height="3" rx="1.5" fill="#1a4001" opacity=".4"/>
          {/* Floating icons */}
          <circle cx="48" cy="30" r="18" fill="none" stroke="#1a4001" strokeWidth="1.5"/>
          <text x="40" y="36" fontSize="14" fill="#1a4001">⚙</text>
          <circle cx="272" cy="40" r="18" fill="none" stroke="#e8a020" strokeWidth="1.5"/>
          <text x="264" y="46" fontSize="14" fill="#e8a020">❤</text>
          {/* Arrow */}
          <path d="M290 20 L310 20 L302 12 M310 20 L302 28" stroke="#e8a020" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  </section>
);

/* ─── SERVICES ────────────────────────────────────────────────────── */
const services = [
  { id:'money',    logo:'PrymeMoney',    color:'#1a6bbf', desc:'Loans, credit planning, and financial advice that align with your goals.' },
  { id:'insurance',logo:'PrymeInsurance',color:'#e8420a', desc:'Protect what matters most with health, term, and general insurance policies.' },
  { id:'legal',    logo:'PrymeLegal',    color:'#8a7000', desc:'Guidance in real estate transactions, home loans, and investments.' },
  { id:'property', logo:'PrymeProperty', color:'#1a4001', desc:'Legal documentation, and advisory made simple.' },
];

const ServicesSection = () => (
  <section className="section services-section" id="services">
    <div className="container">
      <div className="section-header-center">
        <span className="section-label">Featured Services</span>
        <h2 className="section-title">Quick Glance at Our Verticals:</h2>
        <p className="section-sub" style={{margin:'0 auto'}}>
          We are dedicated to providing you with valuable services that simplify your loan search and empower
          you to make informed borrowing decisions. Our comprehensive range of services
        </p>
      </div>
      <div className="services-grid">
        {services.map(s => (
          <Link to={`/services#${s.id}`} key={s.id} className="service-card">
            <div className="service-card-logo">
              <span className="svc-pr" style={{color:'#1a4001'}}>PR</span>
              <span className="svc-rupee">₹</span>
              <span className="svc-yme" style={{color:'#1a4001'}}>YME</span>
              <br/>
              <span className="svc-name" style={{color:s.color}}>{s.logo.replace('Pryme','').toUpperCase()}</span>
            </div>
            <h3>{s.logo}</h3>
            <p>{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ─── WHY CHOOSE US ─────────────────────────────────────────────── */
const WhyChooseUs = () => (
  <section className="why-section">
    <div className="container why-inner">
      <div className="why-illustration">
        <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%'}}>
          <ellipse cx="170" cy="240" rx="130" ry="20" fill="#ddebd0" opacity=".6"/>
          {/* Table */}
          <rect x="60" y="150" width="220" height="12" rx="6" fill="#c8d8b8"/>
          <rect x="80" y="162" width="10" height="60" rx="5" fill="#c8d8b8"/>
          <rect x="250" y="162" width="10" height="60" rx="5" fill="#c8d8b8"/>
          {/* Laptop */}
          <rect x="120" y="100" width="100" height="52" rx="5" fill="#1a4001"/>
          <rect x="125" y="105" width="90" height="42" rx="3" fill="#2d8c0a" opacity=".8"/>
          <rect x="100" y="152" width="140" height="6" rx="3" fill="#1a4001"/>
          {/* Charts on screen */}
          <rect x="133" y="118" width="12" height="20" rx="2" fill="#e8a020"/>
          <rect x="150" y="112" width="12" height="26" rx="2" fill="#e8f5e0"/>
          <rect x="167" y="122" width="12" height="16" rx="2" fill="#e8a020"/>
          <rect x="184" y="108" width="12" height="30" rx="2" fill="#e8f5e0"/>
          {/* Left person */}
          <circle cx="95" cy="75" r="26" fill="#1a4001"/>
          <rect x="68" y="110" width="54" height="55" rx="12" fill="#2d9e2d"/>
          <rect x="48" y="115" width="22" height="45" rx="11" fill="#2d9e2d"/>
          {/* Right person */}
          <circle cx="245" cy="65" r="26" fill="#2d3a1a"/>
          <rect x="218" y="100" width="54" height="55" rx="12" fill="#1a6b1a"/>
          <rect x="270" y="105" width="22" height="45" rx="11" fill="#1a6b1a"/>
          {/* Light bulb */}
          <circle cx="245" cy="30" r="16" fill="#e8a020" opacity=".9"/>
          <rect x="241" y="44" width="8" height="10" rx="2" fill="#c8801a"/>
          {/* Coin */}
          <circle cx="95" cy="40" r="18" fill="none" stroke="#e8a020" strokeWidth="2"/>
          <text x="88" y="46" fontSize="14" fill="#e8a020">$</text>
          {/* Up arrow */}
          <circle cx="170" cy="60" r="18" fill="none" stroke="#1a4001" strokeWidth="2"/>
          <path d="M170 70 L170 52 M164 58 L170 52 L176 58" stroke="#1a4001" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="why-content">
        <span className="section-label">Why Choose Us</span>
        <h2 className="section-title">Experience Excellence in Loan<br />Review and Comparison</h2>
        <p className="section-sub">
          Our dedicated team of experts conducts thorough research and analysis to provide you with
          comprehensive and unbiased reviews of various loan options.
        </p>
        <ul className="why-checklist">
          {['Zero paperwork','Claim support assistance','Loan + legal bundled services','Trusted partner network','Free consultation available','Transparent fee structure'].map(item => (
            <li key={item}><span className="why-check">✓</span>{item}</li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary arr" style={{marginTop:28}}>Book A Free Consultation</Link>
      </div>
    </div>
  </section>
);

/* ─── PARTNER BANKS ─────────────────────────────────────────────── */
const banks = ['HSBC','SBI','Kotak','HDFC','Axis Bank','AU Small Finance','IndusInd','Yes Bank','PNB','ICICI'];

const Partners = () => (
  <section className="section partners-section">
    <div className="container">
      <div className="section-header-center">
        <span className="section-label">Partners</span>
        <h2 className="section-title">Our Partnered Banks</h2>
      </div>
    </div>
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...banks,...banks].map((b,i) => (
          <div key={i} className="bank-chip">
            <span className="bank-dot" />
            {b}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── ARTICLES (BLOG PREVIEW) ───────────────────────────────────── */
const placeholders = [
  { _id:'1', title:'Blog Post #1', excerpt:'Stay informed about the latest financial trends and how they impact your business and personal finances.', image:'', category:'Finance', createdAt: new Date().toISOString() },
  { _id:'2', title:'Understanding MSME Loans in 2025', excerpt:'A complete guide to navigating government schemes and private lenders for small business growth.', image:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop', category:'Finance', createdAt: new Date().toISOString() },
  { _id:'3', title:'Term Insurance: What Every Family Needs', excerpt:'Why term insurance remains the most cost-effective protection for your loved ones.', image:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop', category:'Insurance', createdAt: new Date().toISOString() },
];

const Articles = () => {
  const [blogs, setBlogs] = useState(placeholders);
  useEffect(() => {
    axios.get('/api/blogs').then(r => { if(r.data.length) setBlogs([...placeholders,...r.data]); }).catch(()=>{});
  },[]);

  return (
    <section className="articles-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Articles</span>
          <h2 className="section-title">In-depth Blog Posts</h2>
        </div>
        <div className="articles-list">
          {blogs.slice(0,3).map(b => (
            <div key={b._id} className="article-card">
              <div className="article-img">
                {b.image
                  ? <img src={b.image} alt={b.title}/>
                  : <div className="article-img-placeholder">400 × 400</div>
                }
              </div>
              <div className="article-body">
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
                <div className="article-divider"/>
              </div>
              <Link to={`/blogs/${b._id}`} className="btn btn-outline arr article-read-btn">Read More</Link>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:32}}>
          <Link to="/blogs" className="btn btn-outline">See All Articles →</Link>
        </div>
      </div>
    </section>
  );
};

/* ─── PROCESS ──────────────────────────────────────────────────── */
const steps = [
  { n:'01', title:'Research & Explore', desc:'We understand your financial needs through a detailed free consultation.' },
  { n:'02', title:'Comparison & Analysis', desc:'We compare the best products and providers suited to your profile.' },
  { n:'03', title:'Reviews & Feedback', desc:'Our experts present transparent recommendations and options.' },
  { n:'04', title:'Secure Your Solution', desc:'We complete documentation and finalize your solution — zero hassle.' },
];

const Process = () => (
  <section className="section process-section">
    <div className="container">
      <div className="section-header-center">
        <span className="section-label">Our Working Process</span>
        <h2 className="section-title">Simplified Steps to Find Your Ideal Solution</h2>
      </div>
      <div className="process-grid">
        {steps.map(s => (
          <div key={s.n} className="process-card">
            <div className="process-num">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── LOAN CALCULATOR ───────────────────────────────────────────── */
const Calculator = () => {
  const [principal,setPrincipal] = useState(500000);
  const [rate,setRate] = useState(8.5);
  const [tenure,setTenure] = useState(20);

  const r = rate/12/100, n = tenure*12;
  const emi = r===0 ? principal/n : (principal*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  const total = emi*n, interest = total-principal;

  return (
    <section className="section calc-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Loan Calculator</span>
          <h2 className="section-title">Empower Yourself with Accurate Loan Estimates</h2>
        </div>
        <div className="calc-wrap">
          <div className="calc-inputs">
            {[
              {label:'Loan Amount',val:principal,set:setPrincipal,min:100000,max:10000000,step:50000,fmt:v=>`₹${Number(v).toLocaleString('en-IN')}`},
              {label:'Interest Rate (%)',val:rate,set:setRate,min:5,max:20,step:0.1,fmt:v=>`${v}%`},
              {label:'Tenure (years)',val:tenure,set:setTenure,min:1,max:30,step:1,fmt:v=>`${v} yrs`},
            ].map(f => (
              <div key={f.label} className="calc-field">
                <div className="calc-label-row">
                  <label>{f.label}</label>
                  <strong>{f.fmt(f.val)}</strong>
                </div>
                <input type="range" min={f.min} max={f.max} step={f.step}
                  value={f.val} onChange={e=>f.set(Number(e.target.value))}/>
              </div>
            ))}
          </div>
          <div className="calc-result">
            <div className="result-emi">
              <span>Monthly EMI</span>
              <strong>₹{Math.round(emi).toLocaleString('en-IN')}</strong>
            </div>
            <div className="result-row"><span>Principal</span><strong>₹{principal.toLocaleString('en-IN')}</strong></div>
            <div className="result-row"><span>Total Interest</span><strong>₹{Math.round(interest).toLocaleString('en-IN')}</strong></div>
            <div className="result-row"><span>Total Amount</span><strong>₹{Math.round(total).toLocaleString('en-IN')}</strong></div>
            <Link to="/contact" className="btn btn-primary arr" style={{width:'100%',justifyContent:'center',marginTop:16}}>Apply for Loan</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── TESTIMONIALS ──────────────────────────────────────────────── */
const defaultTestimonials = [
  {name:'Ritu Sharma',occupation:'Business Owner',message:'Pryme helped me get the best home loan and insurance in one place. Seamless and stress-free!',rating:5},
  {name:'Aakash Mehta',occupation:'Software Engineer',message:'They found me a loan with 1.5% lower interest than my bank. The process was completely paperless.',rating:5},
  {name:'Priya Joshi',occupation:'Doctor',message:'Outstanding legal documentation support for my property purchase. Everything done on time, transparently.',rating:5},
];

const Testimonials = () => {
  const [list,setList] = useState(defaultTestimonials);
  const [cur,setCur] = useState(0);
  useEffect(() => {
    axios.get('/api/testimonials').then(r=>{if(r.data.length)setList([...defaultTestimonials,...r.data]);}).catch(()=>{});
  },[]);
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Client Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testi-card">
          <div className="testi-quote">"</div>
          <p>{list[cur].message}</p>
          <div className="testi-author">
            <div className="testi-avatar">{list[cur].name[0]}</div>
            <div>
              <strong>{list[cur].name}</strong>
              <span>{list[cur].occupation}</span>
            </div>
          </div>
          <div className="testi-stars">{'⭐'.repeat(list[cur].rating)}</div>
        </div>
        <div className="testi-dots">
          {list.map((_,i)=>(
            <button key={i} className={`t-dot ${i===cur?'active':''}`} onClick={()=>setCur(i)}/>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── FAQ ──────────────────────────────────────────────────────── */
const faqs = [
  {q:'How do I apply for a loan through your platform?',a:'Simply fill out our contact form or call us. Our advisor will connect with you within 24 hours to understand your requirements and guide you through the process.'},
  {q:'What types of loans do you compare?',a:'We cover home loans, personal loans, business loans, MSME loans, education loans, and more — with comparisons across 15+ partner banks.'},
  {q:'Do you offer financial advice or recommendations?',a:'Yes, we provide tailored financial advisory services based on your unique situation, goals, and risk appetite.'},
  {q:'Are there any fees for consultation?',a:'Initial consultation is completely free. We will clearly communicate any advisory fees before beginning any engagement.'},
];

const FAQ = () => {
  const [open,setOpen] = useState(null);
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f,i)=>(
            <div key={i} className={`faq-item ${open===i?'open':''}`}>
              <button className="faq-q" onClick={()=>setOpen(open===i?null:i)}>
                {f.q}<span className="faq-icon">{open===i?'−':'+'}</span>
              </button>
              {open===i && <p className="faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CTA BANNER ───────────────────────────────────────────────── */
const CTA = () => (
  <section className="cta-section">
    <div className="container cta-inner">
      <div>
        <h2>Ready to grow your financial future?</h2>
        <p>Book a free consultation with our experts today — no obligations.</p>
      </div>
      <Link to="/contact" className="btn btn-accent arr">Get Started Free</Link>
    </div>
  </section>
);

/* ─── BACK TO TOP ──────────────────────────────────────────────── */
const BackToTop = () => {
  const [show,setShow] = useState(false);
  useEffect(()=>{
    const fn=()=>setShow(window.scrollY>400);
    window.addEventListener('scroll',fn);
    return ()=>window.removeEventListener('scroll',fn);
  },[]);
  if(!show) return null;
  return (
    <button className="back-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
      ↑
    </button>
  );
};

/* ─── HOME PAGE ────────────────────────────────────────────────── */
const Home = () => (
  <>
    <Hero />
    <MsmeBanner />
    <ServicesSection />
    <WhyChooseUs />
    <Partners />
    <Articles />
    <Process />
    <Calculator />
    <Testimonials />
    <FAQ />
    <CTA />
    <BackToTop />
  </>
);

export default Home;
