/**
 * Seed script — run with: npm run seed
 * Populates MongoDB with sample blogs, testimonials, and creates admin user
 */

require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const Testimonial = require('./models/Testimonial');
const Admin = require('./models/Admin');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/pryme_consulting';

const blogs = [
  {
    title: 'Understanding Home Loan Interest Rates in 2025',
    excerpt: 'A comprehensive guide to navigating the home loan landscape with the latest rate changes from RBI.',
    content: `Home loan interest rates in India have seen significant changes in 2025. The Reserve Bank of India's monetary policy decisions have directly impacted the rates offered by banks and NBFCs.

Fixed rates typically range from 8.5% to 11%, while floating rates can be lower in the short term but carry uncertainty. Choosing between fixed and floating depends on your risk appetite and financial planning horizon.

Key factors that affect your home loan rate include: your CIBIL score, loan-to-value ratio, income stability, the lender's benchmark rate, and whether you're salaried or self-employed.

A CIBIL score above 750 generally qualifies you for the best rates. Maintaining a low credit utilization ratio and paying EMIs on time are the fastest ways to improve your score.

Pryme Consulting can help you compare rates across 15+ partner banks to ensure you get the best deal tailored to your profile. Our advisors have helped over 500 clients save an average of 1.2% on their home loan interest rates.`,
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=360&fit=crop',
    author: 'Rajesh Kumar',
  },
  {
    title: 'Why Every Family Needs a Term Insurance Plan',
    excerpt: 'Term insurance is the most cost-effective way to secure your family\'s financial future against unexpected events.',
    content: `Life is unpredictable. A term insurance plan ensures your family is financially protected even in your absence. Unlike traditional insurance plans, term plans offer pure life cover at a fraction of the cost.

A healthy 30-year-old can get Rs. 1 crore coverage for as low as Rs. 700–900 per month. The premium remains fixed throughout the policy tenure, making it easy to budget for.

Key factors to consider when buying term insurance: coverage amount (typically 10–15x annual income), policy tenure (till retirement age), claim settlement ratio of the insurer, and riders like critical illness or accidental death benefit.

Online term plans are generally 20–30% cheaper than offline plans. However, it's important to disclose all health conditions honestly to avoid claim rejection.

At PrymeInsurance, we help you compare over 20 insurers and find the plan with the best coverage, lowest premium, and highest claim settlement ratio for your specific situation.`,
    category: 'Insurance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=360&fit=crop',
    author: 'Sunita Patel',
  },
  {
    title: 'MSME Loans: A Complete Guide for Small Businesses',
    excerpt: 'Everything you need to know about MSME financing options, government schemes, and eligibility criteria.',
    content: `Micro, Small and Medium Enterprises (MSMEs) form the backbone of India's economy, contributing nearly 30% of GDP. Yet access to formal credit remains a challenge for many small business owners.

Under the MSME Development Act, businesses with investment in plant and machinery below Rs. 50 crore and turnover below Rs. 250 crore qualify as MSMEs and are eligible for priority sector lending.

Key government schemes available:
- MUDRA Loans (up to Rs. 10 lakh, no collateral required)
- CGTMSE — Credit Guarantee Fund Scheme (collateral-free loans up to Rs. 2 crore)
- Stand-Up India (for SC/ST and women entrepreneurs)
- PM SVANidhi (for street vendors)

Documents typically required: Udyam Registration Certificate, business vintage proof, bank statements (12 months), ITR, and GST returns.

PrymeMoney specializes in MSME loan applications and has a 94% approval rate for eligible applicants. We handle the entire documentation process so you can focus on running your business.`,
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=360&fit=crop',
    author: 'Arun Mehta',
  },
  {
    title: 'Real Estate Investment Tips for First-Time Buyers in India',
    excerpt: 'Key considerations when purchasing your first property — from location research to legal due diligence.',
    content: `Buying your first home is one of the biggest financial decisions you'll make. Here's what experienced buyers wish they knew before signing on the dotted line.

Location is everything. Research upcoming infrastructure projects, metro connectivity, school proximity, and the developer's track record before committing. Areas with upcoming metro stations or IT parks tend to appreciate faster.

Legal due diligence is non-negotiable. Always verify: clear title deed, RERA registration, approved building plan, Encumbrance Certificate, and Occupancy Certificate. Our PrymeLegal team handles this exhaustively.

Under-construction vs ready-to-move: Under-construction properties are cheaper but carry delivery risk. Ready-to-move properties let you see exactly what you're buying and allow immediate possession.

Hidden costs that first-time buyers miss: stamp duty (5–7%), registration charges (1%), GST on under-construction properties (5%), maintenance deposit, and society formation charges.

Budget for 10–15% above the property price for these additional costs. Pryme Consulting's property advisors can walk you through every rupee of the transaction.`,
    category: 'Property',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=360&fit=crop',
    author: 'Pryme Team',
  },
];

const testimonials = [
  { name: 'Ritu Sharma', occupation: 'Business Owner, Indore', message: 'Pryme helped me get the best home loan and insurance policy in one place. Seamless and stress-free! Their team saved me almost ₹3 lakhs in interest over my loan tenure.', rating: 5 },
  { name: 'Aakash Mehta', occupation: 'Software Engineer, Pune', message: 'Excellent advisory service. They found me a home loan with 1.5% lower interest than what my bank was offering. The process was completely paperless.', rating: 5 },
  { name: 'Priya Joshi', occupation: 'Doctor, Bhopal', message: 'The legal documentation support for my property purchase was outstanding. Every document was verified, and the registration happened smoothly with zero stress.', rating: 5 },
  { name: 'Suresh Nair', occupation: 'Entrepreneur, Mumbai', message: 'Got my MSME loan approved in 8 working days through Pryme. Their team knew exactly which bank to approach and handled all the paperwork.', rating: 5 },
  { name: 'Neha Agarwal', occupation: 'Teacher, Indore', message: 'I was confused about which term plan to buy. Pryme\'s advisor spent an hour explaining all options and helped me pick the right coverage for my family. Highly recommend!', rating: 5 },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Blog.deleteMany({});
    await Testimonial.deleteMany({});
    console.log('🗑️  Cleared existing blogs and testimonials');

    // Insert blogs
    await Blog.insertMany(blogs);
    console.log(`📝 Inserted ${blogs.length} blogs`);

    // Insert testimonials
    await Testimonial.insertMany(testimonials);
    console.log(`💬 Inserted ${testimonials.length} testimonials`);

    // Create admin if not exists
    const existing = await Admin.countDocuments();
    if (existing === 0) {
      await Admin.create({ username: 'admin', password: 'pryme@admin123' });
      console.log('👤 Admin created → username: admin | password: pryme@admin123');
      console.log('   ⚠️  IMPORTANT: Change the password after first login!');
    } else {
      console.log('👤 Admin already exists, skipping');
    }

    console.log('\n✅ Seed complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err.message);
    process.exit(1);
  }
}

seed();
