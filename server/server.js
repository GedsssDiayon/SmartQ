const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/status', (req, res) => {
    res.json({ message: 'SmartQ Server is running!' });
});

// TODO: Import and use routes in the routes folder
// e.g., app.use('/api/students', studentRoutes);
// e.g., app.use('/api/staff', staffRoutes);

app.listen(PORT, () => {
    console.log(`Server initialized on port ${PORT}`);
});
