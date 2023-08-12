const express = require('express');
const app = express();

const user = {
  firstname: 'John',
  lastname: 'Doe'
};

app.get('/', (req, res) => {
  res.send(user);
  console.log(user);
});

app.use(express.static(__dirname + '/public'));

app.listen(6000, () => {
  console.log('Server is running on http://localhost:6000/');
});