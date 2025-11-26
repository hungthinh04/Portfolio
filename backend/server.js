require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/email.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/email', emailRoutes);

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server đang hoạt động!' });
});

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server đang chạy trên port ${PORT}`);
}); 