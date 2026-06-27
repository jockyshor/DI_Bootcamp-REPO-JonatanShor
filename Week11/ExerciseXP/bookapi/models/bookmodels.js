import { pool } from '../config/neondb.js';

export function getAllBooks(){
    return pool.query(
        'select * from books'
    )
};

export function getBook(id){
    return pool.query(
        'select * from books where id = $1',
         [id]
    )
}

export function createNewBook(title, author, publishedYear){
    return pool.query(
        'insert into books (title, author, publishedyear) values ($1, $2, $3) returning *',
         [title, author, publishedYear]
    )
}

export function deleteBook(id){
    return pool.query(
        'DELETE FROM books WHERE id = $1',
         [id]
    )
}

