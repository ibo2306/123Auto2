# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` - Starts Vite dev server with HMR
- **Build**: `npm run build` - Creates production build in `dist/`
- **Lint**: `npm run lint` - Runs ESLint on all JS/JSX files
- **Preview**: `npm run preview` - Preview production build locally

## Architecture

This is a German-language car marketplace React application ("123Auto") built with Vite.

### Tech Stack
- React 19 with Vite 7
- UI: Material UI (MUI) v7 + Mantine v8 (MantineProvider wraps the app)
- Routing: react-router-dom v7
- Styling: CSS files per component + MUI sx props

### Backend Integration
The frontend expects a backend API at `http://localhost:8000` with these endpoints:
- `POST /auth/register` & `POST /auth/login` - JWT authentication (token stored in localStorage)
- `GET /me` - Get current user (requires Bearer token)
- `GET /cards` - Car listings with optional query params: `brand`, `model`, `price_max`, `reg_min`, `city`
- `POST /chat` - AI chatbot endpoint (sends `message`, returns `reply`)

### Key Directories
- `src/components/pages/` - Route page components (HomePage, AuthPage, ChatBotPage, ProfilePage, etc.)
- `src/components/chatBot/` - ChatBot feature (ChatWindow, ChatSidebar, ChatInput, MessageList)
- `src/components/searchCars/` - Car search/filter UI (PaperSearch with CarsList brand/model data)
- `src/components/cards/` - Car listing cards (Cards component + CarCards grid)
- `src/api/` - API client functions (auth.js for login/register/logout)

### Routing (App.jsx)
- `/` - HomePage (search + car type filters)
- `/auth` - Login/Register toggle page
- `/profile` - User profile
- `/Cars` - All car listings
- `/NewCar` - Sell a car
- `/ChatBot` - AI car advisor chat

### State Management
- No global state library; uses React useState/useEffect
- Auth token persisted in localStorage
- Chat messages managed in ChatBotPage component state
