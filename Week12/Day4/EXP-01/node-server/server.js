const http = require('http');

const user = {
  firstname: 'John',
  lastname: 'Doe'
};

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header to 'application/json'
  res.setHeader('Content-Type', 'application/json');

  // Send the user object as JSON
  res.end(JSON.stringify(user));
});

// Start the server and listen on port 8080
server.listen(8080, 'localhost', () => {
  console.log('Server is running on http://localhost:8080/');
});