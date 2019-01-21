const axios =  require('axios')

let pokemonIndex = [];
let caughtPokemon = [];
let id = 0;

axios.get('https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=0&limit=151')
.then((response) => 
{
    pokemonIndex = response.data.results.map((curVal, i) => 
    {
        curVal.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
        return curVal;
    });
})
.catch((error) =>
{
    console.log(error);
})


module.exports = {
    getAll: function(request, response)
    {
        response.status(200).send(caughtPokemon);
    },

    getPokemon: function(request, response)
    {
        const {index} = request.params;
        const pokemon = {
            name: pokemonIndex[index - 1].name,
            img: pokemonIndex[index - 1].img
        }
        console.log(index)
        console.log(pokemon)
        response.status(200).send(pokemon);
    },

    catchPoke: function(request, response)
    {
        id++;
        const newPoke = {
            name: request.body.name,
            color: request.body.color,
            id: id
        }
        caughtPokemon.push(newPoke);
        response.status(200).send(caughtPokemon)
    },

    renamePoke: function(request, response)
    {
        const index = caughtPokemon.findIndex((curVal) =>
        {
            return curVal.id === parseInt(request.params.id, 10)
        });
        caughtPokemon[index].name = request.params.name;

        response.status(200).send(caughtPokemon);

    },

    releasePoke: function(request, response)
    {
        caughtPokemon = caughtPokemon.filter((curVal) =>
        {
            return curVal.id !== parseInt(request.params.id,10);
        })
        response.status(200).send(caughtPokemon);
    },

}