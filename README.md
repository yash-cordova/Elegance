# Hair Salon Full-Stack Application

A modern hair salon management application built with React frontend and Express backend.

## 🏗️ Project Structure

```
FO/
├── clerk-vite-app/          # React frontend (Vite + TypeScript)
├── backend/                 # Express.js backend
├── package.json            # Root package.json for managing both apps
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (>= 18.0.0)
- npm or yarn

### Installation

1. **Install all dependencies (frontend + backend + root):**
   ```bash
   npm run install-all
   ```

2. **Set up environment variables:**
   ```bash
   # Copy the example environment file
   cp backend/env.example backend/.env
   ```

### Running the Application

#### Development Mode (Recommended)
Run both frontend and backend in development mode with hot reload:
```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:5173 (Vite dev server)
- **Backend**: http://localhost:5000 (Express API)

#### Production Mode
Build and run the application in production mode:
```bash
npm run build
npm start
```

### Individual Commands

#### Frontend Only
```bash
npm run dev:frontend    # Development mode
npm run start:frontend  # Production mode
```

#### Backend Only
```bash
npm run dev:backend     # Development mode with nodemon
npm run start:backend   # Production mode
```

## 📡 API Endpoints

The backend provides the following API endpoints:

- `GET /` - API status and version info
- `GET /health` - Health check endpoint
- `GET /api/services` - Get available hair salon services
- `GET /api/appointments` - Get appointments data

## 🛠️ Technologies Used

### Frontend
- React 19
- TypeScript
- Vite
- React Router DOM
- Clerk Authentication

### Backend
- Node.js
- Express.js
- CORS
- Helmet (Security)
- Morgan (Logging)
- Dotenv (Environment variables)

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run install-all` | Install dependencies for all projects |
| `npm run dev` | Start both frontend and backend in development mode |
| `npm run dev:frontend` | Start only frontend in development mode |
| `npm run dev:backend` | Start only backend in development mode |
| `npm run build` | Build the frontend for production |
| `npm run start` | Start both apps in production mode |
| `npm run lint` | Run ESLint on the frontend |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

## 🎯 Features

- **Authentication**: Clerk-based user authentication
- **Role-based Access**: Different user roles and permissions
- **Service Management**: Hair salon services catalog
- **Appointment System**: Booking and management
- **Modern UI**: Responsive and user-friendly interface
- **API Integration**: RESTful API for data management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License. 