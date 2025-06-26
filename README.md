# 🚀 NASA Space Explorer – Backend API

This is the backend for the **NASA Space Explorer** project, built using **Node.js + Express**. It serves as a middleware API between the frontend and various NASA APIs, including:

- 📷 APOD – Astronomy Picture of the Day
- 🚀 Mars Rover Photos & Manifests
- ☄️ NEO – Near Earth Object Feed

The backend is Vercel-compatible and can run locally with hot reload using `nodemon`.

---

## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **Axios** (to fetch data from NASA APIs)
- **serverless-http** (for Vercel compatibility)
- **Vercel** (for serverless deployment)

---

## 🗂 Folder Structure
backend/
├── api/                # Serverless function entry point for Vercel
│   └── index.js
├── app.js              # Express app config (exported, no app.listen)
├── controllers/        # Logic to handle route behavior (e.g., getAPOD)
│   └── controller.js
├── middleware/         # Central error handling
│   └── errorHandler.js
├── routes/             # Express router definitions
│   └── routes.js
├── services/           # API interaction layer with NASA services
│   └── service.js
├── utils/              # (Optional) Utility functions
├── .env                # Environment variables (NASA_API_KEY)
├── package.json        # Project dependencies and scripts
├── vercel.json         # Vercel configuration
└── README.md

---

## 🛠️ Installation (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/nasa-space-explorer-backend.git
cd nasa-space-explorer-backend

2. Install dependencies
npm install

3. Set up your .env
Create a .env file in the root:
NASA_API_KEY=your_real_api_key_here

4. Start development server
npm run dev

5. API is now running at:
http://localhost:5050/api