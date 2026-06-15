
const { rFile, wFile } = require('./fileManager.js');

// Use the imported functions to read the content of the “Hello World.txt” 
// text file and then write to the “Bye World.txt” with the content “Writing to the file”.

rFile('HelloWorld.txt');

const text = "Writing To The File" 
wFile('ByeWorld.txt', text);
