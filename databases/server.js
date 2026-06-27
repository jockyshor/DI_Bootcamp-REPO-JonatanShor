import express from 'express';
import cors from 'cors';
import productRouter from './routes/products.js'
import path from 'path';


const app = express();

app.use(cors());
app.use(express.json())

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`server listening in ${PORT}`)
});

app.use("/", express.static(path.resolve() + '/public'));

app.use('/api/products', productRouter);


