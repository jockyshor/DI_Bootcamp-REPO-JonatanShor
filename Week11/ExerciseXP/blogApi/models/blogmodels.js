import { pool } from '../config/neondb.js';

export function getAllBlogs(){
    return pool.query(
        'select * from posts'
    )
};

export function getOneBlog(id){
    return pool.query(
        'select * from posts where id = $1',
         [id]
    )
}

export function createNewBlog(title, content){
    return pool.query(
        'insert into posts (title, content) values ($1, $2) returning *',
         [title, content]
    )
}

export function updateBlog(id, content){
    return pool.query(
        'UPDATE posts SET content = $1 WHERE id = $2 RETURNING *',
         [content, id]
    )
}

export function deleteBlog(id){
    return pool.query(
        'DELETE FROM posts WHERE id = $1',
         [id]
    )
}

