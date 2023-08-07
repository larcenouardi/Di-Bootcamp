const http = require('http');
const getCurrentDateTime = require('./main');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header to 'text/html'
  res.setHeader('Content-Type', 'text/html');

  // Get the current date and time
  const dateTime = getCurrentDateTime();

  // Respond with an HTML paragraph that outputs the current date and time
  res.write(`<p>Current date and time: ${dateTime}</p>`);
  res.end();
});

// Start the server and listen on port 8080
server.listen(8080, 'localhost', () => {
  console.log('Server is running on http://localhost:8080/');
});