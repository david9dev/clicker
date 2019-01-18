const express = require('express');
const bodyParser = require('body-parser');
const ctrlr = require('./controller/controller')

const app = express();

app.use(bodyParser.json());

//create app.post('/boxes')
//read app.get('/boxes')
//update app.put('/boxes')
//delete app.delete('/boxes')

app.listen(3001,() => 
{
    console.log("im listening");
})