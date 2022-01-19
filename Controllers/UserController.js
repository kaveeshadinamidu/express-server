const express = require('express');
const router = express.Router();

router.post('/signin',(req,res)=>{
    console.log(req.body);
});

module.exports = router;