const express = require ('express');
const app = express();

const booksDatabase = [
    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publishedYear: 1937
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    }
];


app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

app.get('/api/books', (req, res) => {
    res.json(booksDatabase)
});


app.get('/api/books/:bookID', (req, res) => {
  const id = Number(req.params.bookID);
  const book = booksDatabase.find((book) => book.id === id);
  
  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.json(book);

});

app.post('/api/books', (req, res) => {
    const newBookData = req.body; 

    const newBook = {
        id: booksDatabase.length + 1,
        title: newBookData.title,
        author: newBookData.author,
        publishedYear: newBookData.publishedYear
    };

    booksDatabase.push(newBook);

    res.status(201).json({
        message: "Book added!",
        data: newBook
    });
});


