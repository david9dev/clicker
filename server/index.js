const express = require('express');
const bodyParser = require('body-parser');
const ctrlr = require('./controller/controller')

const app = express();

app.use(bodyParser.json());

//create 
app.post('/boxes', ctrlr.createBox)
//read 
app.get('/boxes', ctrlr.getAll);
//update 
app.put('/boxes/:id/:name', ctrlr.updateBox)
//delete 
app.delete('/boxes/:id', ctrlr.deleteBox)

app.listen(3002,() => 
{
    console.log("im listening");
})