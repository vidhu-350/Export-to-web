// server.js

// Import the Express library
const express = require('express');
const path = require('path');
const app = express(); // Create an Express application instance
const PORT = 5500; // Define the port number the server will listen on

// Middleware to serve static files (HTML, CSS, JS) from the current project directory
app.use(express.static(path.join(__dirname)));

// Route to serve the main HTML file (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve index.html for the root route
});

// Start the Express server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); // Log a message when the server starts successfully
});