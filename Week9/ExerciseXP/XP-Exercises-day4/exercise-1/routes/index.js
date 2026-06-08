const express = require('express');

const router = express.Router();


router.get('/', (req, res)=>{
    res.send('HomePage')
})

router.get('/about',(req, res)=>{
    res.send('AboutPage')
})

module.exports = router;





