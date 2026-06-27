import express from 'express';
import cors from 'cors';
import blogRouter from './routes/blogsroutes.js';



const app = express();

app.use(cors());
app.use(express.json())

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`server listening in ${PORT}`)
});

app.use('/posts', blogRouter);


