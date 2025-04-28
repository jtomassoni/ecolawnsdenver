import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Quote submission endpoint
app.post('/api/quotes', (req, res) => {
  const quoteData = req.body;
  console.log('Received quote request:', quoteData);
  // Here you would typically save to a database
  res.json({ 
    success: true, 
    message: 'Quote request received',
    estimatedPrice: '$40/visit'
  });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
}); 