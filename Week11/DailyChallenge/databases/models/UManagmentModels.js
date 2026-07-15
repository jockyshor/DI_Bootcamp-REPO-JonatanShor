import { pool } from '../config/neondb.js';
import { bcrypt } from 'bcrypt'


const saltRounds = 10;

export async function createNewUser(email, username, fName, lName, plainPwd){

    const hashPwd = await bcrypt.hash(plainPwd, saltRounds);

   const queryText= `
            WITH new_user AS (
            INSERT INTO users (email, username, first_name, last_name) 
            VALUES ($1, $2, $3, $4) 
            RETURNING id)

            INSERT INTO hashpwd (userId, passwordHash) 
             SELECT id, $5 FROM new_user`;

    return pool.query(queryText, [email, username, fName, lName, hashPwd]) 
 }     

export  function userLogIn(username){
    const queryText = `
    SELECT * FROM users INNER JOIN hashpwd ON users.id = hashpwd.userid WHERE users.username = $1
    `;
    return pool.query(queryText, [username])
}


export function getAll(){
    return pool.query(
        'SELECT * FROM users'
    )
}

export function specificUser(id){
    return pool.query(
        'SELECT * FROM users WHERE id = $1', [id]
    )
}

export function updateUser(id, email, username){
    return pool.query(
        'UPDATE users SET email = $1, username = $2 WHERE id = $3 RETURNING *', [email, username, id]
    )
}


