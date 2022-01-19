const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.set('view-engine', 'ejs')
app.use(express.static('public'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.listen(3000,()=>{
    console.log('Server started succesfully!');
});