const fs = require('fs');

const directoryPath = '.';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory:', err.message);
  }
  
  console.log(`--- Files in "${directoryPath}" ---`);
  files.forEach(file => {
    console.log(file);
  });
});