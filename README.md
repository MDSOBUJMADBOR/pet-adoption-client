# 🐾 Pet Adoption Platform (PawAdopt)

## 📌 Project Name
Pet Adoption Platform (PawAdopt)

---

## 🎯 Purpose
This is a full-stack Pet Adoption Platform built with **Next.js, Express.js, and MongoDB**.  
The system helps connect people with pets who need a loving home and makes the adoption process simple, fast, and organized.

---

## 🌐 Live URL
👉 https://pet-adoption-client-main.vercel.app

---

## ✨ Features

- 🐶 Browse all available pets with full details (breed, age, location, fee)
- 🔍 Search pets by name and filter by species
- 💰 Sort pets by adoption fee
- 📝 Users can send adoption requests
- 📋 “My Requests” dashboard with status tracking (pending / approved / rejected)
- ➕ Add new pets with full form (CRUD system)
- 🗑️ Delete and update pet listings
- 👤 User-based data filtering using email
- 📊 Request system linked with pet ID
- 📱 Fully responsive design for mobile and desktop
- 🔐 Authentication-based user access

---

## 🧰 NPM Packages Used

### Frontend (Next.js)
- next
- react
- react-dom
- @heroui/react
- @heroui/styles
- lucide-react
- react-icons
- date-fns
- react-hot-toast
- mongodb
- better-auth
- @better-auth/mongo-adapter

### Backend (Express.js)
- express
- mongodb
- cors
- dotenv
- nodemon

---

## 🏗️ Tech Stack

- ⚛️ Next.js (Frontend)
- ⚛️ React 19
- 🟢 Node.js + Express.js (Backend)
- 🍃 MongoDB (Database)
- 🎨 Tailwind CSS + HeroUI
- 🔐 Better Auth Authentication

---

## 🚀 API Endpoints

### 🐾 Pets (Courses Collection)
- GET `/courses` → Get all pets
- GET `/courses/:id` → Get single pet
- POST `/courses` → Add new pet
- PATCH `/courses/:id` → Update pet
- DELETE `/courses/:id` → Delete pet
- GET `/courses/email/:email` → Get pets by owner email

---

### 📝 Adoption Requests
- POST `/request` → Create adoption request
- GET `/request/:email` → Get user requests
- GET `/request/:petId` → Get requests by pet ID
- DELETE `/request/:id` → Delete request

---

## 🧠 Key Highlights

- Full CRUD functionality for pets
- Adoption request system with status tracking
- Email-based filtering system
- Pet-to-user relationship handling
- REST API backend with Express
- MongoDB database integration
- Clean UI with HeroUI components

---

## ❤️ Mission
To help stray and abandoned pets find loving homes and reduce animal homelessness by connecting adopters with pets easily.

---

## 👨‍💻 Developer Info
**Name:** MD SOBUJ MADBOR  
📧 Email: sobujmadbor660@gmail.com  
📍 Location: Dhaka, Bangladesh  

---

## 📌 Note
If you like this project, don't forget to ⭐ the repository.
