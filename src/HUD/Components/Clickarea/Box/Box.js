import React, { Component } from 'react'
import './Box.css'

class NewBox {
    constructor(name, color, chance, x, y) {
        this.name = name;
        this.sudoId = "";
        this.color = color;
        this.chance = chance;
        this.x = x;
        this.y = y;
        this.stop = 0;

    }


    gravity() {
        this.stop = setTimeout(() => {
            this.y += 1;
        }, 1000)
    }

    destroyBox(callback) {
        // clearTimeout(this.stop)
    }

    popBox(despawn, collect, index, paused) {
        if (!paused) {
            despawn(index);
            collect(this.name, this.color);
        }
    }
}

// function randomName(box)
// {
//     const includeString = "abcdefghijklmnopqrstuvwxyz";
//     console.log(Math.random());
//     return(0)
// }

// function randomColor(box)
// {

// }

// function randomChance(box)
// {

// }

// function randomPosition(box)
// {

// }
class Box extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.randomName = this.randomName.bind(this);
        this.randomColor = this.randomColor.bind(this);
        this.randomPosition = this.randomPosition.bind(this);
    }

    randomName(box) {
        const includeString = "abcdefghijklmnopqrstuvwxyz";
        let name = "";
        for (let i = 0; i < 4; i++) {
            name += includeString.split("")[Math.floor(Math.random() * 25)]
        }
        box.name = name;
        return box;
    }

    randomColor(box) {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 9)
        }
        box.color = color;

        return box
    }

    randomPosition(box) {
        box.x = Math.floor(Math.random() * 300)
        return box;
    }


    render() {


        let box = new NewBox('asdf', "#123456", 100, 0, 0);
        this.randomName(box);
        this.randomColor(box);
        this.randomPosition(box);

        let boxStyle = {
            backgroundColor: 'blue',
            left: box.x
        }
        boxStyle.backgroundColor = box.color;
        const { destroy, toPop, index, paused } = this.props;
        
        return (
            <div
                className='box'
                style={boxStyle}
                onClick={() => box.popBox(destroy, toPop, index, paused)}
            >
                {box.name}
            </div>
        );
    }
}
export default Box;