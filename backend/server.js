import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Vite default port
  credentials: true
}));
app.use(morgan('combined')); // Logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hair Salon API is running!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API routes
app.get('/api/services', (req, res) => {
  // Mock data for hair salon services
  const services = [
    {
      id: 1,
      name: 'Haircut',
      description: 'Professional haircut and styling',
      price: 25,
      duration: 30
    },
    {
      id: 2,
      name: 'Hair Coloring',
      description: 'Full hair coloring service',
      price: 80,
      duration: 120
    },
    {
      id: 3,
      name: 'Hair Styling',
      description: 'Special occasion hair styling',
      price: 45,
      duration: 60
    },
    {
      id: 4,
      name: 'Hair Treatment',
      description: 'Deep conditioning and treatment',
      price: 35,
      duration: 45
    }
  ];
  
  res.json(services);
});

app.get('/api/appointments', (req, res) => {
  // Mock appointments data
  const appointments = [
    {
      id: 1,
      customerName: 'John Doe',
      service: 'Haircut',
      date: '2024-01-15',
      time: '10:00',
      status: 'confirmed'
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      service: 'Hair Coloring',
      date: '2024-01-15',
      time: '14:00',
      status: 'confirmed'
    }
  ];
  
  res.json(appointments);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 API base URL: http://localhost:${PORT}/api`);
});

export default app; 