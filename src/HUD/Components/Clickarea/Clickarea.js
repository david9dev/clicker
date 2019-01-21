import React, {Component} from 'react'
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
        this.spawnBox = this.spawnBox.bind(this);
        this.despawnBox = this.despawnBox.bind(this);
        this.randomPokemon = this.randomPokemon.bind(this);
        this.randomColor = this.randomColor.bind(this);
        this.randomPosition = this.randomPosition.bind(this);
        // this.timer = this.timer.bind(this);
    }

    randomPokemon(box) {
        const name = Math.floor(Math.random() * 151)
        box.name = name;
        return box;
    }

    randomColor(box) {
        let color = "#";
        const includeString = "0123456789ABCDEF"
        for (let i = 0; i < 6; i++) {
            color += includeString.split("")[Math.floor(Math.random() * 15)]
        }
        box.color = color;

        return box
    }

    randomPosition(box) {
        box.x = Math.floor(Math.random() * 300)
        return box;
    }

    spawnBox()
    {
        let newBox = {
            name: "",
            color: "",
            x: 0,
        }
        this.randomPokemon(newBox);
        this.randomColor(newBox);
        this.randomPosition(newBox);
        let int = this.state.number + 1;
        let displayBoxesCopy = this.state.displayBoxes.slice()

        displayBoxesCopy.push(newBox);
        this.setState({
            number: int,
            displayBoxes: displayBoxesCopy
        })

    }


    despawnBox(index)
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
                box = {curVal}
                destroy={(index,stop) => this.despawnBox(index,stop)}
                addCollection={(name, color) => this.props.method(name,color) }
                />
            )
        })
        return(
            <div className='clickarea'>
                <button
                onClick={() => this.spawnBox()}>
                    spawn
                </button>
                {this.state.number}
                {boxes}
            </div>
        )
    }
}

export default Clickarea;