
import  { readFile } from 'fs/promises';

export async function readMyFile(text){
    try{
        const data = await readFile(text, 'utf-8')
        console.log(data)
    }
    catch(err){
        console.error('Error reading file:', err.message)
    }
}

