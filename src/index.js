const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const contactRoutes = require('./routes/contactRoutes');
const modalRoutes = require('./routes/modalRoute'); // ✅ 1. ADD THIS LINE
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Rate Limiting (shared for all /api routes)
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5, // max 5 requests per minute
  message: 'Too many requests, slow down 🚫'
});
app.use('/api', limiter);

// Routes
app.use('/api', contactRoutes);
app.use('/api', modalRoutes); // ✅ 2. ADD THIS LINE

// Root route for sanity check
app.get('/', (req, res) => res.send('API is live ✅'));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
