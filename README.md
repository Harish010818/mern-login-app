# 🔐 Full Stack Login/Register System (React + TailwindCSS + Express + MongoDB)

A fully responsive and functional **Login & Register system** built with:
- **Frontend:** React.js + TailwindCSS
- **Backend:** Express.js + MongoDB
- **Auth:** JWT + HttpOnly Cookies

---

## 🚀 Features

### 🔸 Frontend (React + TailwindCSS)
- ✅ Fully responsive **Login** and **Register** pages
- ✅ Validations:
  - Empty fields
  - Password length
  - Matching passwords
- ✅ On successful login, redirects to **Dashboard** with message: `Welcome [username]`
- ✅ Dashboard is **protected** — cannot be accessed without login
- ✅ **Dark/Light mode toggle** implemented
- ✅ Uses **cookies** to store and manage auth token

### 🔸 Backend (Express + MongoDB)
- ✅ `/register` and `/login` routes
- ✅ Secure password hashing with **bcrypt**
- ✅ JWT generated and stored in cookie
- ✅ Auth middleware to protect routes
- ✅ Reusable **User Schema**

---

## 🧱 Tech Stack

| Frontend         | Backend            | Auth & Storage     |
|------------------|--------------------|--------------------|
| React.js         | Node.js + Express  | JWT (in cookies)   |
| TailwindCSS      | MongoDB + Mongoose | bcrypt             |
| React Router DOM | CORS, cookie-parser| Axios              |

---
## ⚙️ Setup Instructions

Follow the steps below to run the project on your local machine:

---

### 📁 1. Clone the Repository

1. bash
git clone https://github.com/Harish010818/mern-login-app.git
cd mern-login-app

2. server/.env
PORT=5000
MONGO_URI=your_mongo_connection_string
FRONTEND_URL=http://localhost:5173
SECRET_KEY=your_jwt_secret

3. client/.env
VITE_API_URL=http://localhost:5000
