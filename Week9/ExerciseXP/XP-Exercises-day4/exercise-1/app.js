const express = require('express');

const app = express();
const indexRoutes = require('./routes/index.js');

app.listen(3500, () => {
    console.log('Server is listening in port 3500');
});

app.use('/', indexRoutes);



