# Pryme Consulting — MERN Stack Project

A full MERN stack clone of prymeconsulting.in built as a college project.

## Project Structure

```
pryme-consulting/
├── client/                       React Frontend
│   └── src/
│       ├── components/           Navbar, Footer, ProtectedRoute
│       ├── context/              AuthContext (JWT)
│       └── pages/
│           ├── Home.js           Full landing page
│           ├── About.js
│           ├── Services.js
│           ├── Blogs.js
│           ├── BlogDetail.js
│           ├── Contact.js
│           ├── AdminLogin.js     Admin login
│           ├── AdminDashboard.js Protected dashboard
│           └── NotFound.js       404 page
└── server/                       Node.js + Express Backend
    ├── middleware/auth.js         JWT middleware
    ├── models/                   Contact, Blog, Testimonial, Admin
    ├── routes/                   auth, contact, blog, testimonial
    └── seed.js                   DB seed script
```

## Tech Stack

- Frontend: React.js, React Router v6, Axios
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Auth: JWT + bcryptjs

## Setup & Run

### 1. Backend
```bash
cd server
npm install
cp .env.example .env        # set MONGO_URI and JWT_SECRET
npm run seed                # creates admin + sample data
npm run dev                 # starts on port 5000
```

### 2. Frontend
```bash
cd client
npm install
npm start                   # opens at localhost:3000
```

Admin panel: http://localhost:3000/admin

## Default Admin Credentials (after seed)
- Username: admin
- Password: pryme@admin123

## API Endpoints

| Method | Endpoint          | Auth  | Description            |
|--------|-------------------|-------|------------------------|
| POST   | /api/auth/login   | No    | Admin login            |
| POST   | /api/contacts     | No    | Submit contact form    |
| GET    | /api/contacts     | Admin | List all enquiries     |
| DELETE | /api/contacts/:id | Admin | Delete enquiry         |
| GET    | /api/blogs        | No    | Get all blogs          |
| POST   | /api/blogs        | Admin | Create blog post       |
| PUT    | /api/blogs/:id    | Admin | Edit blog post         |
| DELETE | /api/blogs/:id    | Admin | Delete blog post       |
| GET    | /api/testimonials | No    | Get testimonials       |

## Features

Public site: Hero, Services, Why Us, Partners marquee, Process steps,
EMI Calculator, Testimonials, Blog listing, FAQ, Contact form, 404 page.

Admin panel: JWT login, stats overview, manage enquiries, manage blogs,
create new posts, protected routes.

## Free Deployment

MongoDB Atlas (database) + Render.com (backend) + Vercel (frontend)
All free tier — great for college submission with a live URL.
