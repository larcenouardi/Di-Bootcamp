const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header to 'text/html'
  res.setHeader('Content-Type', 'text/html');

  // Return three different lines of HTML to the browser
  res.write('<h1>This is my first response</h1>');
  res.write('<h1>This is my second response</h1>');
  res.write('<p>This is  my third response.</p>');
  res.end();
});

// Start the server and listen on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server is running on http://localhost:3000/');
});