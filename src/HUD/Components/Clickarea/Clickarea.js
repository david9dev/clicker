import React, {Component} from 'react'
import axios from 'axios'
import './Clickarea.css'
import Box from './Box/Box'

class Clickarea extends Component
{
    constructor()
    {
        super();
        this.state ={
            displayBoxes: [],
            recentClicked: {},
            number: 0,
        }
        this.spawnPokemon = this.spawnPokemon.bind(this);
        this.despawnPokemon = this.despawnPokemon.bind(this);
        this.randomPokemon = this.randomPokemon.bind(this);
        this.randomPosition = this.randomPosition.bind(this);
        this.getPokemon = this.getPokemon.bind(this);
        // this.timer = this.timer.bind(this);
    }

    getPokemon(index)
    {
        axios.get(`http://localhost:3002/poke/${index}`)
        .then((response) => {
            this.randomPosition(response.data);
            const copy = this.state.displayBoxes.slice();
            copy.push(response.data)
            this.setState({
                displayBoxes: copy
            })
        })
        .catch((error) => 
        {
            console.log(error);
            alert("couldnt get pokemon");
        })

    }

    randomPokemon() {
        const index = Math.floor(Math.random() * 151)
        this.getPokemon(index);
    }

    randomPosition(pokemon) {
        pokemon.x = Math.floor(Math.random() * 300)
        return pokemon;
    }

    spawnPokemon()
    {
        this.randomPokemon();
        let int = this.state.number + 1;
        this.setState({
            number: int,
        })

    }


    despawnPokemon(index)
{
        let copy = this.state.displayBoxes.slice()
        copy.splice(index,1)

        this.setState({
            displayBoxes: copy
        })

    }

//     timer(destroy, index, clear, sec)
// {
//     clear = setTimeout(() =>
//     {
//         console.log("timer", sec)
//         if(sec === 6)
//         {
//             clearTimeout(clear);
//             destroy(index);
//         }
//         else
//         {
//             sec += 1;
//         }
//     }, 1000)
// }


    render()
    {
        const boxes = this.state.displayBoxes.map((curVal,index) =>
        {
            return(
                <Box 
                key={index} 
                index={index}
                pokemon = {curVal}
                destroy={(index,stop) => this.despawnPokemon(index,stop)}
                addCollection={(name, img) => this.props.addPokemon(name, img) }
                />
            )
        })
        return(
            <div className='clickarea'>
                <button
                onClick={() => this.spawnPokemon()}>
                    spawn
                </button>
                {this.state.number}
                {boxes}
            </div>
        )
    }
}

export default Clickarea;