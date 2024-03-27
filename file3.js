// Import required modules
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Read the JSON data from the file
let data = require('./data/data.json');

// Express routes for CRUD operations
app.post('/dogs/post', (req, res) => {
    // Logic to create a new dog entry
    const newDog = { 
        id: data.length + 1, 
        name: 'Caramelo', 
        age: 2, 
        breed: 'Bernese', 
        size: 'Large' 
    };
    data.push(newDog);
    // Update the JSON file
    fs.writeFileSync('./data/data.json', JSON.stringify(data));
    res.send('Dog entry successfully posted');
});

app.put('/dogs/update/:id', (req, res) => {
    // Logic to update a dog by ID
    const id = req.params.id;
    const updatedDog = { id: parseInt(id), name: 'Updated Dog', age: 3, breed: 'Bernese', size: 'Large' };
    data = data.map(item => (item.id === parseInt(id) ? updatedDog : item));
    // Update the JSON file
    fs.writeFileSync('./data/data.json', JSON.stringify(data));
    res.send('Dog updated successfully');
});

app.delete('/dogs/delete/:id', (req, res) => {
    // Logic to delete a dog by ID
    const id = req.params.id;
    data = data.filter(item => item.id !== parseInt(id));
    // Update the JSON file
    fs.writeFileSync('./data/data.json', JSON.stringify(data));
    res.send('Dog deleted successfully');
});

// Define a route handler for the root path
app.get('/dogs', (req, res) => {
    res.send('Welcome to the CRUD operations API for dogs, it is working and running!');
});

// Start the server on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/dogs`);
});
