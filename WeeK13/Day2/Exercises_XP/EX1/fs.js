const fs = require('fs');


fs.readFile('text_W13_D2.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  console.log(data);
});