import express from 'express';
import cors from 'cors';
import bookRouter from './routes/bookroutes.js';



const app = express();

app.use(cors());
app.use(express.json())

const PORT = 5250;

app.listen(PORT, ()=>{
    console.log(`server listening in ${PORT}`)
});

app.use('/api/books', bookRouter);


