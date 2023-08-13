const fs = require('fs');

// Create a new text file and write initial content.
fs.writeFile('text.txt', 'Some Text To See (create a text)', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File created and initial content written.');
});


// Append more text to the existing file.
fs.appendFile('text.txt', '\nBuy orange juice', (err) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log('Text appended successfully.');
  });



  // Delete the text file .
fs.unlink('text.txt', (err) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log('File deleted successfully.');
  });


  // Create a new text file and write initial content.
fs.writeFile('text II.txt', 'Some Text To See (create a text after delete)', (err) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log('File created and initial content written.');
  });
  