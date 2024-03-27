// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000;

// Define route to display group sizes
app.get('/', (req, res) => {
    const groupSizes = ['Small', 'Medium', 'Large'];
    let htmlContent = '<h1>Dog Group Sizes:</h1><ul>';
    groupSizes.forEach(size => {
        htmlContent += `<li>${size}</li>`;
    });
    htmlContent += '</ul>';
    res.send(htmlContent);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
