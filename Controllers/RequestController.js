const express = require('express');

const router = express.Router();

router.get('/view',(req,res)=>{
    res.send('Request view');
});

module.exports = router;