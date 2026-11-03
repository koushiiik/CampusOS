# CampusOS

CampusOS is a modern Campus & Learning Management System (LMS) built with an Express/Node.js backend and a Next.js frontend.

---

## Project Structure

```text
CampusOS/
├── backend/               # Express API & MongoDB backend
│   ├── src/
│   │   ├── config/        # Database & configuration
│   │   ├── controllers/   # Request handlers
│   │   ├── middlewares/   # Express middlewares
│   │   ├── models/        # Mongoose data models
│   │   ├── routes/        # API route definitions
│   │   ├── services/      # Business logic
│   │   ├── app.js         # Express app initialization
│   │   └── server.js      # Server entry point
│   ├── .env               # Environment variables (ignored by git)
│   ├── .env.example       # Example environment variables template
│   └── package.json
├── frontend/              # Next.js React frontend
│   ├── app/               # Next.js App Router
│   ├── public/            # Static assets
│   └── package.json
├── .gitignore             # Root git ignore rules
└── README.md
```

---

## Tech Stack

- **Backend**: Node.js, Express 5, Mongoose 9, dotenv, cors
- **Database**: MongoDB
- **Frontend**: Next.js 16, React 19, Tailwind CSS 4, TypeScript

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher; v20+ recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a MongoDB Atlas connection URI)

---

## Getting Started

### 1. Backend Setup

```bash
cd backend
npm install
```

Configure your environment variables in `backend/.env` (see `backend/.env.example`):

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/campusos
```

Start the backend:

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

The API will be accessible at `http://localhost:5000`.

#### Backend Health Endpoints
- `GET /` — API welcome message
- `GET /api/health` — Service health & uptime status

---

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be running at `http://localhost:3000`.

