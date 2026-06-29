import express from 'express';
import cors from 'cors';
import userRouter from './routes/UManagmentroutes.js'
import path from 'path';


const app = express();

app.use(cors());
app.use(express.json())

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`server listening in ${PORT}`)
});

app.use('/', userRouter);


