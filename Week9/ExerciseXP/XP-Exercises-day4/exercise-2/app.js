const express = require('express');

const app = express();
const todoRoutes = require('./routes/todos.js');

app.listen(1250, ()=> {console.log('server listening in port 1250')});


app.use('/todos', todoRoutes );

