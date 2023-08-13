const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

let shoppingList = [];

app.post('/addItem', (req, res) => {
  const newItem = req.body;
  shoppingList.push(newItem);
  res.json(shoppingList);
});

app.get('/shoppingList', (req, res) => {
  res.json(shoppingList);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});