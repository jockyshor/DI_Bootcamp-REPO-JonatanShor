
const express = require ('express');
const app = express();

app.listen(1000, () => {
    console.log('server is listening on port 1000')
})

const dt = require('./data/dataService.js');

app.get('/fetchPosts',async (req, res)=>{
    let data = await dt();

    if (!data){
        res.status(400).send("Error - Fetching")
    }

    res.json(data);
    console.log("data has been successfully retrieved and sent as a response")
})

