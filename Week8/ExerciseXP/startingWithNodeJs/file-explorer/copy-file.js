const fs = require('fs');

fs.readFile('source.txt', 'utf-8', (err, content) => {
    if (err) {
        return console.error('Error reading file:', err.message);
  }});


  
fs.writeFile('destination.txt', content, 'utf-8', (err) => {
    if (err) {
        return console.error('Error writing file:', err.message);
    }
    console.log('File copied successfully!');
  });




