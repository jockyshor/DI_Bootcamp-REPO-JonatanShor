import  express  from 'express';

const app = express();

app.use(express.json());

app.use(express.static('.')); // comando para que express se linkee con el html. usamos el "." para decirle a express donde buscar (osea en la misma carpeta)


app.listen(1500, ()=>{
    console.log("server is listening in port 1500")
});

app.post('/submit',(req, res)=>{

    const { guess, correctGuess } = req.body;

    if (guess.trim().toLowerCase() === correctGuess.trim().toLowerCase()) {
        res.json({ isCorrect: true }); 
    } else {
        res.json({ isCorrect: false }); 
    }

} )

