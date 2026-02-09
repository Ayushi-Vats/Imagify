# Imagify 🎨✨  
A full-stack AI image generation application with authentication and a credit-based payment system.

Imagify allows users to generate images using AI after logging in and purchasing credits via Razorpay.

---

## 🚀 Live Demo

Frontend (Vercel):  
👉 https://imagify-alpha-eight.vercel.app/

Backend (Render):  
👉 https://imagify-backend-o2vx.onrender.com/

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Razorpay Payments

---

## ✨ Features

- User registration & login (JWT based)
- Credit-based image generation
- Razorpay payment integration
- MongoDB persistent storage
- Secure API endpoints
- Deployed full-stack (Vercel + Render)

---

## 📁 Project Structure
Imagify/
├── client # React frontend (Vercel)
└── server # Express backend (Render)

## ⚙️ Run Locally

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Ayushi-Vats/Imagify.git
cd Imagify
```
### 2️⃣ Backend Setup
```
cd server
npm install
npm run dev
```

Create server/.env:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
CURRENCY=INR
```
### 3️⃣ Frontend Setup
```
cd client
npm install
npm run dev
```

Create client/.env:
```
VITE_BACKEND_URL=http://localhost:4000
```
## 🌐 Deployment
### Frontend

- Hosted on Vercel
- Root directory: client
- Uses VITE_BACKEND_URL environment variable
### Backend

- Hosted on Render
- Root directory: server
- Environment variables configured in Render dashboard

🔐 Notes

- MongoDB Atlas IP whitelist must include:
```
0.0.0.0/0
```

- Render free tier sleeps after inactivity (cold start expected).

- Razorpay keys must be added manually to backend environment variables.
