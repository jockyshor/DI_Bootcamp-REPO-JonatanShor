import { getAllBooks, getBook, createNewBook, deleteBook } from "../models/bookmodels.js";

export async function readAllBooks(req, res){
    try {
        const results = await getAllBooks();
        res.json(results.rows)
    } catch (error) {
        console.error(error);
        res.status(400).json({message: "books not found"})
    }
}

export async function readBook(req, res){
    const { id } = req.params;
    
    if (!id) {
        return res.status(400).json({ error: "ID is required..." });
    }

    try {
        const result = await getBook(id);
        res.status(202).json(result.rows)
        
    } catch (error) {
         console.error(error);
        res.status(404).json({message: 'Book not found' })
    }
}

export async function createBook(req, res){
    const { title, author, publishedYear } = req.body;
    try {
        const result = await createNewBook(title, author, publishedYear)
        res.status(202).json(result.rows)
        
    } catch (error) {
        console.error(error);
        res.status(400).json({message: 'something went wrong' })
        
    }
}


export async function deleteOneBook(req, res){
    const { id } = req.params;
    
    if (!id) {
        return res.status(400).json({ error: "ID is required..." });
    }


    try {
        const result = await deleteBook(id);
        res.status(202).json(result.rows)
        
    } catch (error) {
         console.error(error);
         res.status(404).json({message: 'Book not found' })
    }
}