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
            paused: false
        }
        this.spawnBox = this.spawnBox.bind(this);
        this.despawnBox = this.despawnBox.bind(this);
        this.stop = this.stop.bind(this);

        this.pause = false;
        this.clear = 0;
    }

spawnBox()
{
    let int = this.state.number + 1;
    let displayBoxesCopy = this.state.displayBoxes.slice()

    displayBoxesCopy.push(int);

    clearTimeout(this.clear);
    this.setState({
        number: int,
        displayBoxes: displayBoxesCopy
    })

}


despawnBox(index)
{
    if(!this.pause)
    {
        let copy = this.state.displayBoxes.slice()
        copy.splice(index,1)

        this.setState({
            displayBoxes: copy
        })
        clearTimeout(this.clear);
    }

}

stop(stop)
{
    console.log(stop);
    console.log(this.pause)
    if(this.pause)
    {
        this.setState({
            paused: false
        })
        this.pause = false;
    }
    else 
    {
        clearTimeout(stop);
        this.pause = true;
    }

}
    render()
    {
        this.clear = setTimeout(() =>
        {
            this.spawnBox();
        }, 1000)
        const boxes = this.state.displayBoxes.map((curVal,index) =>
        {
            return(
                <Box 
                key={curVal} 
                index={index}
                destroy={(index,stop) => this.despawnBox(index,stop)}
                />
            )
        })
        return(
            <div className='clickarea'>
            {boxes}
                <button
                onClick={() => this.stop(this.clear)}>
                    Pause
                </button>
                {this.state.number}
            </div>
        )
    }
}

export default Clickarea;