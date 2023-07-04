// Part 1 :


const largeNumber = require('./main.js');

const b = 5;
const sum = largeNumber + b;
console.log(sum);


// PS C:\Users\conta\OneDrive\Bureau\Di-Bootcamp\Week12\Day2\Daily_challenge> node script.js
// 361


// Part 2 :



const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<p>My Module is <sum></p>');
  res.end('<h1>Hi there at the frontend</h1>');
});

server.listen(3000, () => {
  console.log("I'm listening");
});