import { pool } from '../config/neondb.js';

export function getAllProducts(){
    return pool.query(
        'select * from products'
    )
};

export function createNewProduct(name, price){
    return pool.query(
        'insert into products (name, price) values ($1, $2) returning *',
         [name, price]
    )
}
