// Import required modules
const express = require('express');
const fs = require('fs');

// Create an Express application
const app = express();
const port = 3000;

// Read JSON data from a file
const jsonData = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));

// Define route to display JSON contents
app.get('/dogs', (req, res) => {
    res.json(jsonData);
});

// Define route to display dogs by size
app.get('/dogs/size/:size', (req, res) => {
    const size = req.params.size.toLowerCase();
    const dogsBySize = jsonData.filter(dog => dog.size.toLowerCase() === size);
    res.json(dogsBySize);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/dogs`);
});
