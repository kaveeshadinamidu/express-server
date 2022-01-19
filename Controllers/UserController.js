const express = require('express');
const router = express.Router();

router.post('/signin',(req,res)=>{
    console.log(req.body.username);
    res.send('Recieved!');
});

router.post('/signup', (req, res)=> {
    console.log(req.body);
    res.send('Okay');
});



module.exports = router;