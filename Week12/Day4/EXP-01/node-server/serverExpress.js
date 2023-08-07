const express = require('express');

const app = express();

// Route for the root URL ("/")
app.get('/', (req, res) => {
  // Return an HTML line of code
  res.send('<h1>This an HTML tag</h1>');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});