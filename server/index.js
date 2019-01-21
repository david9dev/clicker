const express = require('express');
const bodyParser = require('body-parser');
const ctrlr = require('./controller/controller')

const app = express();

app.use(bodyParser.json());

//create 
app.post('/poke', ctrlr.catchPoke)
//read 
app.get('/poke', ctrlr.getAll);
app.get('/poke/:index', ctrlr.getPokemon)
//update 
app.put('/poke/:id/:name', ctrlr.renamePoke)
//delete 
app.delete('/poke/:id', ctrlr.releasePoke)

app.listen(3002,() => 
{
    console.log("im listening");
})