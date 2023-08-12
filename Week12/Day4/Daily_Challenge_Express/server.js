const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;
  if (typeof hobby !== 'string') {
    res.status(404).send('Not Found');
  } else {
    res.send(hobby);
  }
});

app.get('/pic', (req, res) => {
  res.sendFile(__dirname + '/public/pic.jpg');
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});

app.post('/formData', (req, res) => {
  const { email, message } = req.body;
  const output = `${email} sent you a message: "${message}"`;
  console.log(output);
  res.send(output);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});