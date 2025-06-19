# 🔐 Full Stack Login/Register System (React + TailwindCSS + Express + MongoDB)

This is a full-stack Login/Register authentication system built using React.js, TailwindCSS, Node.js, Express, and MongoDB. It includes protected routes, JWT-based authentication via HttpOnly cookies, and a responsive UI with dark/light theme toggle. The app validates user input on the frontend and securely handles password encryption and authentication on the backend. Upon successful login, users are redirected to a protected dashboard.

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

```bash
# 1️⃣ Clone the repo
git clone https://github.com/Harish010818/mern-login-app.git
cd mern-login-app

# 2️⃣ Create the following environment files:

# 🔹 server/.env
PORT=5000
MONGO_URI=your_mongo_connection_string
FRONTEND_URL=http://localhost:5173
SECRET_KEY=your_jwt_secret

# 🔹 client/.env
VITE_API_URL=http://localhost:5000

# 3️⃣ Install dependencies
cd server && npm install
cd ../client && npm install

# 4️⃣ Start both servers
cd ../server && npm run dev
cd ../client && npm run dev

# 5️⃣ Visit the app at:
http://localhost:5173
```
## API Endpoints

- 🔑 Login: `/api/user/login`
- 📝 Register: `/api/user/register`
- 👤 AuthUser: `/api/user/`
---

## ⚠️ Known Issues or Limitations

- Currently, there is **no logout functionality** implemented in the app.
- This feature can be added easily in future versions for a complete auth flow.

---

## 🔗 Deployed Link

[🌐 Live App](https://mern-login-app-t5hx.vercel.app/)

---

## 📬 Contact

- 📧 Email: devharishjuyal18@gmail.com  
- 💼 LinkedIn: [Harish Chandra Juyal](https://www.linkedin.com/in/harish-chandra-juyal-968aba2a9/)
