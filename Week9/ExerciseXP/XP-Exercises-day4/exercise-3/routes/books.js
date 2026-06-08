const express = require('express');

const router = express.Router();

const booksArr = [
    { id: 1, title: "Cien años de soledad", author: "Gabriel García Márquez" },
    { id: 2, title: "Don Quijote de la Mancha", author: "Miguel de Cervantes" },
    { id: 3, title: "Ficciones", author: "Jorge Luis Borges" },
    { id: 4, title: "Pedro Páramo", author: "Juan Rulfo" },
    { id: 5, title: "La casa de los espíritus", author: "Isabel Allende" }
];



router.get('/', (req, res)=>{
    res.json(booksArr)
})

router.post('/',(req, res)=>{
    const { book } = req.body;

    if (!book || book.trim() === "") {
        return res.status(400).json({ error: 'Book, is a mandatory field' });
    }

    const newBook = {
        id: booksArr.length + 1, 
        title: book.title.trim(),
        author: book.author
    };

    booksArr.push(newBook);

    res.status(200).json(newBook)

})


router.put('/:id', (req, res)=>{
    const id = Number(req.params.id);

    const index = booksArr.findIndex(b=>b.id === id);

    if(index === -1){
        return res.status(404).json({error: "Book Not Found"});
        
    }

    const updatedBook = {
        id: booksArr[index].id,
        title: req.body.title,
        author: req.body.author
    };

    todos[index]= updatedTask;

    res.status(200).json('Task Updated Succesfully')
})

router.delete('/:id',(req, res)=>{

    const id = Number(req.params.id);

    const index = booksArr.findIndex(task=>task.id === id);

    if(index === -1){
        return res.status(404).json({error: "Book Not Found"});
        
    }

    booksArr.splice(index, 1);

    res.status(200).json('Book deleted Succesfully')
} )

module.exports = router;


