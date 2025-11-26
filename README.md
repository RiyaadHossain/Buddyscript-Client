# 🌐 Buddyscript Client (AppifyLab Frontend)

A modern **Next.js 14 + TypeScript** frontend for the Buddyscript social feed application.  
This repository contains the full client-side implementation, including authentication pages, protected routes, post feed UI, comments, likes, and global state management using **Redux Toolkit + RTK Query**.

The frontend is cleanly structured, fully typed, and optimized for scalability and production deployment.

---

## 📖 Table of Contents

- [🧩 How the Application Works](#🧩-how-the-application-works)
- [🚀 Features](#🚀-features)
- [📂 Project Structure](#📂-project-structure)
- [🛠️ Tech Stack](#🛠️-tech-stack)
- [⚙️ Installation & Setup](#⚙️-installation--setup)
  - [1️⃣ Clone the repo](#1️⃣-clone-the-repo)
  - [2️⃣ Create a `.env.local` file](#2️⃣-create-a-envlocal-file)
  - [3️⃣ Install and Run the client](#3️⃣-install-and-run-the-client)
- [🔗 API Usage](#🔗-api-usage)
- [🔐 Environment Variables](#🔐-environment-variables)
- [📦 State Management](#📦-state-management)
- [🎨 UI & Styling](#🎨-ui--styling)
- [🎯 Notes & Next Steps](#🎯-notes--next-steps)

---

## 🧩 How the Application Works

1. The app is built using **Next.js App Router** (`src/app`), providing layouts, nested routing, and server/client component separation.
2. **Redux Toolkit** manages global state and RTK Query handles all API communication with the backend server.
3. Protected routes live under `src/app/(protected)` and require valid authentication (token stored in cookies/localStorage based on your implementation).
4. Shared UI components (buttons, cards, modals, forms, etc.) live under `src/components/ui`.
5. The feed, posts, comments, and interactions are handled in `src/components/feedPage`.
6. API base URLs, public environment variables, and client configuration are loaded from `.env.local`.

---

## 🚀 Features

- ⚡ **Next.js 14 App Router** for modern routing & server components  
- 🔐 **Authentication pages** (login/register)  
- 📰 **Feed UI** with posts, comments, replies, likes  
- 💬 **Nested Comments + Dynamic Replies**  
- 👍 **Reactions with dynamic avatar previews**  
- 🔗 **Full API integration** with RTK Query  
- 🎨 **Beautiful component UI** with TailwindCSS  
- 🧠 **Reusable UI components** (buttons, modals, inputs, badges)  
- 📦 **Centralized Redux store** for auth + feed  
- 🛡️ **Protected routes** for authenticated users  
- 🪄 **TypeScript-first** design with shared models, enums & interfaces

---

## 📂 Project Structure

```
src/
├── app/
│   ├── (protected)/        # Protected pages (requires authentication)
│   ├── (public)/           # Public routes (login/register)
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   └── fonts.ts            # Font configuration
│
├── components/
│   ├── feedPage/           # Feed components (posts, comments, replies)
│   ├── ui/                 # Reusable UI elements
│   ├── shared/             # Shared layout/components
│   ├── Login.tsx           # Login form
│   └── Register.tsx        # Registration form
│
├── redux/
│   ├── features/           # RTK slices & RTK Query APIs
│   └── store.ts            # Redux store configuration
│
├── constants/              # App-wide constants
├── enums/                  # Enums for models and types
├── interfaces/             # TypeScript interfaces
├── lib/                    # Utility functions/helpers
├── utils/                  # Global utilities (token helpers, formatters)
└── types/                  # Reusable TypeScript types
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)  
- **Language:** TypeScript  
- **State Management:** Redux Toolkit + RTK Query  
- **Styling:** TailwindCSS  
- **Icons:** Lucide React  
- **Notifications:** sonner  
- **HTTP:** Built-in RTK Query fetch wrapper  
- **Authentication:** Token-based auth integrated with backend  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/RiyaadHossain/Buddyscript-Client.git
cd Buddyscript-Client
```

### 2️⃣ Create a .env.local file

At project root:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/v1
NEXT_PUBLIC_APP_NAME=Buddyscript
```

(Add more keys based on your implementation.)

### 3️⃣ Install and Run the client
```
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Run production build
```


App runs on: 👉 `http://localhost:3000`

## 🔗 API Usage

The frontend communicates with the backend using **RTK Query**.

Each API slice lives in:
`src/redux/features/*`

Examples:

- `commentApi.ts` — Comments & replies
- `postApi.ts` — Posts & feed
- `authApi.ts` — Login/Register
- `likeApi.ts` — Reactions & likes

RTK Query automatically handles caching, invalidation, loading states, and error handling.

## 🔐 Environment Variables

These must be prefixed with `NEXT_PUBLIC_` to be available on the client.

| Variable                  | Description              |
|---------------------------|--------------------------|
| `NEXT_PUBLIC_API_BASE_URL`  | Backend server base URL  |
| `NEXT_PUBLIC_APP_NAME`      | Application display name |

## 📦 State Management

Global state is powered by: 
- `Redux Toolkit` for reducers
- `RTK Query` for API calls
- `redux/hook/hook.ts` for typed useAppDispatch & useAppSelector

Store file: `src/redux/store.ts`

Slices are auto-generated through `createSlice` and connected in the store.

## 🎨 UI & Styling

- TailwindCSS for utility-first styling (globals.css)
- Reusable UI in src/components/ui
- Consistent design system across inputs, buttons, and badges
- Lucide icons for clean UI visuals

## 🎯 Notes & Next Steps

- Add dedicated error pages (/error, /404)
- Improve skeleton loading states for a smoother UX
- Add client-side form validation using Zod or React Hook Form
- Integrate image upload UI with your backend image uploader
- Add a dark mode toggle using Tailwind + next-themes
- Prepare Postman/OpenAPI examples for frontend-backend integration