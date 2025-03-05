# 🚀 PostgreSQL + Prisma + Express API

A simple and efficient **REST API** built with **Express**, **Prisma ORM**, and **PostgreSQL**. This API allows users to perform CRUD operations on a **User** model.

---

## 📌 Features
✅ **PostgreSQL as Database**  
✅ **Prisma as ORM**  
✅ **Express for Backend**  
✅ **Middleware for Data Validation**  
✅ **Pagination Support**  
✅ **Error Handling & Proper Response Codes**  

---

## 📁 Project Structure
```
📂 Project
 ├── 📁 node_modules
 ├── 📁 src
 │   ├── 📁 controller
 │   │   ├── db.ts  # Prisma CRUD functions
 │   ├── 📁 routes
 │   │   ├── userRoutes.ts  # Express routes
 │   ├── server.ts  # Entry point
 ├── 📄 .env  # Database connection config
 ├── 📄 package.json
 ├── 📄 README.md
```
---

## ⚙️ Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Set up the PostgreSQL database**  
Update the `.env` file with your database credentials:
```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/YOUR_DB_NAME"
```

4️⃣ **Migrate the database**
```bash
npx prisma migrate dev --name init
```

5️⃣ **Start the server**
```bash
npm run dev
```

---

## 📌 API Endpoints

### ➕ Create a User
**POST** `/user`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```
📌 **Response**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2025-03-05T10:00:00.000Z"
}
```

---

### 📥 Get All Users
**GET** `/user`
📌 **Response**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2025-03-05T10:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "createdAt": "2025-03-06T11:00:00.000Z"
  }
]
```

---

### 🗑️ Delete a User
**DELETE** `/user/:id`
📌 **Response**
```json
{
  "message": "User deleted successfully"
}
```

---

## 💡 Tech Stack
- **Node.js** (Backend)  
- **Express.js** (API Framework)  
- **Prisma** (ORM)  
- **PostgreSQL** (Database)  

---



