import React, {Component} from 'react'
import './Box.css'

class NewBox
{
constructor(name,color,chance,x,y)
{
    this.name = name;
    this.sudoId = "";
    this.color = color;
    this.chance = chance;
    this.x = x;
    this.y = y;
    this.stop = 0;
    
}


    gravity()
    {
       this.stop = setTimeout(() => 
        {
            this.y += 1;
        }, 1000)
    }

    destroyBox(callback)
    {
        clearTimeout(this.stop)
    }

    popBox(callback)
    {

    }
}

// function randomName(box)
// {
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
class Box extends Component
{
    constructor()
    {
        super();
        this.state = {

        }
    }

    render()
    {
         let box = new NewBox('asd',"red",100,0,0);
        let boxStyle = {
            backgroundColor: 'blue',
        }
        boxStyle.backgroundColor = box.color;
        console.log(this.props.index)
        return(
            <div 
            className='box' 
            style={boxStyle}
            onClick={() => this.props.destroy(this.props.index, this.props.stop)}
            >
        
                </div>
             );
    }
}
export default Box;