const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const userContoller = require('./Controllers/UserController');

app.use('/user',userContoller);

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.listen(3000,()=>{
    console.log('Server started succesfully!');
});