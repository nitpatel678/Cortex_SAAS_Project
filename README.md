# Cortex

AI-powered SaaS platform to create, enhance, and optimize content.

🔗 **Live Demo**: [https://cortex-nu.vercel.app/](https://cortex-nu.vercel.app/)

---

## Features

* **AI Article Writer** – Generate high-quality articles on any topic
* **Blog Title Generator** – Create catchy blog titles instantly
* **AI Image Generation** – Generate stunning images from text prompts (powered by Gemini)
* **Background Removal** – Remove image backgrounds with ease
* **Object Removal** – Delete unwanted objects from photos
* **Resume Reviewer** – Get instant AI feedback on your resume

---

## Tech Stack

| Layer       | Technology Used                          |
| ----------- | ---------------------------------------- |
| Frontend    | React 19, Vite, Tailwind CSS, Clerk Auth |
| Backend     | Express.js (v5), OpenAI, Gemini API      |
| Database    | Neon (PostgreSQL, serverless)            |
| Image Tools | Cloudinary, ClipDrop API, Multer         |
| Auth        | Clerk (JWT, OAuth)                       |
| Hosting     | Vercel (frontend), Render (backend)      |

---

## Environment Variables

Create `.env` files in both `client` (frontend) and `server` (backend).

**Frontend (`client/.env`)**

```env
VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
VITE_BASE_URL=http://localhost:3000
```

**Backend (`server/.env`)**

```env
DATABASE_URL=<your-neon-database-url>

CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>

GEMINI_API_KEY=<your-google-gemini-api-key>
CLIPDROP_API_KEY=<your-clipdrop-api-key>

CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

⚠️ Do not commit `.env` files or secrets to GitHub.

---



# 🚀 Project Setup with Neon Database

This project uses [Neon](https://neon.tech/) as the PostgreSQL database.  
Follow the steps below to configure your database and set up the required table.

---

## 📦 Prerequisites

- A [Neon](https://neon.tech/) account
- PostgreSQL client installed locally (`psql` or a GUI like TablePlus, DBeaver, etc.)
- Your Neon database connection string (look for `postgres://...` in your Neon project settings)

---

## 🛠️ Database Setup

1. **Login to Neon Dashboard**  
   Go to [Neon Console](https://console.neon.tech/) and create a new project.

2. **Copy Connection String**  
   You'll find it under **Connection Details**.  
   Example:

```bash
CREATE TABLE creations (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  prompt TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT NOT NULL,
  publish BOOLEAN DEFAULT FALSE,
  likes TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

```



## Installation & Local Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Varunyadavgithub/NovaCraft-AI.git
   cd nova-craft-ai
   ```

2. **Install Dependencies**

   * Frontend

     ```bash
     cd client
     npm install
     ```
   * Backend

     ```bash
     cd ../server
     npm install
     ```

3. **Set Up Environment Variables** (as shown above).

4. **Run the App**

   * Start Backend

     ```bash
     cd server
     npm run dev
     ```
   * Start Frontend

     ```bash
     cd ../client
     npm run dev
     ```

   Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## Contribution Guide

1. Fork the repository
2. Create a new branch

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Commit your changes

   ```bash
   git commit -m "Added feature XYZ"
   ```
5. Push to your fork

   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a Pull Request to the `main` branch

---

## Made by

**Nitin Patel**

