const express = require('express');

const app = express();

const booksRoutes = require('./routes/books.js')

app.use('/books', booksRoutes);

app.listen(4000, ()=>{
    console.log("Server lostening in port 4000")
})

