const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

const users = [];

app.get('/registerForm', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});

app.get('/loginForm', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/register', (req, res) => {
  const { name, last_name, email, username, password } = req.body;

  const userExists = users.some(user => user.username === username || user.password === password);
  if (userExists) {
    res.status(400).json('Username already exists');
  } else {
    const user = {
      id: users.length + 1,
      name,
      last_name,
      email,
      username,
      password
    };
    users.push(user);
    res.json('Your account is now created!');
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.json(`Hi ${username}, welcome back again!`);
  } else {
    res.status(400).json('Username is not registered');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});