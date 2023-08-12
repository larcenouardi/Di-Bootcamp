const express = require('express');
const app = express();
const port = 3000;

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const response = { id: id };
  console.log(response);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});