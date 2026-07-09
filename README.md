# 🐾 PawAdopt – Pet Adoption Platform

A modern **Full-Stack Pet Adoption Platform** built with **Next.js, Express.js, MongoDB, and Better Auth**. PawAdopt helps connect pet lovers with pets looking for a forever home through a simple, secure, and user-friendly adoption system.

---

## 📷 Project Screenshot

> **Add a screenshot here**

![PawAdopt Screenshot](./public/project-preview.png)

---

# 🌐 Live Demo

### 🚀 Live Website
https://pet-adoption-client-roan.vercel.app

### 💻 Client Repository
https://github.com/MDSOBUJMADBOR/pet-adoption-client

### ⚙️ Server Repository
https://github.com/MDSOBUJMADBOR/adoption-server

---

# 📖 Project Overview

PawAdopt is a full-stack pet adoption platform where users can browse pets, submit adoption requests, and manage their own pet listings. The platform provides a clean, responsive interface with secure authentication and complete CRUD functionality for pet management.

---

# 🛠️ Technologies Used

## Frontend

- Next.js
- React 19
- Tailwind CSS
- HeroUI
- Better Auth
- React Icons
- Lucide React
- Date-fns
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB
- Better Auth
- CORS
- Dotenv

## Database

- MongoDB Atlas

## Deployment

- Vercel (Frontend)
- Render / Railway (Backend)

---

# ✨ Core Features

- 🐶 Browse all available pets
- 🔍 Search pets by name
- 🐱 Filter pets by species
- 💰 Sort pets by adoption fee
- 📝 Send adoption requests
- 📊 Track request status (Pending, Approved, Rejected)
- ➕ Add new pet listings
- ✏️ Update pet information
- 🗑️ Delete pet listings
- 👤 User-specific dashboard
- 📧 Email-based data filtering
- 🔗 Pet-to-user relationship management
- 🔐 Secure authentication with Better Auth
- 📱 Fully responsive for all devices

---

# 📦 Dependencies

## Client

```bash
next
react
react-dom
tailwindcss
@heroui/react
@heroui/styles
better-auth
@better-auth/mongo-adapter
lucide-react
react-icons
react-hot-toast
date-fns
mongodb
```

## Server

```bash
express
mongodb
cors
dotenv
nodemon
better-auth
@better-auth/mongo-adapter
```

---

# 🚀 API Endpoints

## Pets

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/courses` | Get all pets |
| GET | `/courses/:id` | Get single pet |
| POST | `/courses` | Add new pet |
| PATCH | `/courses/:id` | Update pet |
| DELETE | `/courses/:id` | Delete pet |
| GET | `/courses/email/:email` | Get pets by owner |

---

## Adoption Requests

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/request` | Create request |
| GET | `/request/:email` | User requests |
| GET | `/request/:petId` | Requests by pet |
| DELETE | `/request/:id` | Delete request |

---

# ⚙️ Environment Variables

## Client (.env.local)

```env
NEXT_PUBLIC_API_URL=YOUR_SERVER_URL
NEXT_PUBLIC_AUTH_URL=YOUR_AUTH_URL
```

## Server (.env)

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

BETTER_AUTH_SECRET=YOUR_SECRET

BETTER_AUTH_URL=http://localhost:5000
```

---

# 💻 Run Locally

## 1️⃣ Clone Client

```bash
git clone https://github.com/MDSOBUJMADBOR/pet-adoption-client.git
```

```bash
cd pet-adoption-client
```

```bash
npm install
```

```bash
npm run dev
```

---

## 2️⃣ Clone Server

```bash
git clone https://github.com/MDSOBUJMADBOR/adoption-server.git
```

```bash
cd adoption-server
```

```bash
npm install
```

```bash
npm run dev
```

---

# 📁 Project Structure

```
pet-adoption-client/
│
├── app/
├── components/
├── hooks/
├── lib/
├── public/
└── utils/

adoption-server/
│
├── routes/
├── middleware/
├── config/
└── index.js
```

---

# 🎯 Key Highlights

- Full CRUD functionality
- Authentication & Authorization
- Better Auth integration
- RESTful API
- MongoDB database
- User dashboard
- Adoption request management
- Responsive UI
- Clean and reusable components
- Optimized performance

---

# ❤️ Mission

Our mission is to help stray and abandoned pets find safe, loving homes while making the adoption process easy, transparent, and accessible for everyone.

---

# 🔗 Resources

- 🌐 Live Site: https://pet-adoption-client-roan.vercel.app
- 💻 Client Repository: https://github.com/MDSOBUJMADBOR/pet-adoption-client
- ⚙️ Server Repository: https://github.com/MDSOBUJMADBOR/adoption-server

---

# 👨‍💻 Developer

**MD Sobuj Madbor**

- 📧 Email: mdsobujmadbor660@gmail.com
- 📍 Location: Dhaka, Bangladesh
- 🌐 Portfolio: https://sobuj-madbor-portflio.vercel.app

---

## ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.

Made with ❤️ by **MD Sobuj Madbor**
