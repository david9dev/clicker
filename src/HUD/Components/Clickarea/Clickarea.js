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

        //this.pause = false;
        this.timesRendered = 0;
        this.clear = 0;
    }

spawnBox()
{
    let int = this.state.number + 1;
    let displayBoxesCopy = this.state.displayBoxes.slice()

    displayBoxesCopy.push(int);
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
        // clearTimeout(this.clear);
        // this.spawnBox()rs

    }
}

stop()
{
    if(this.state.paused)
    {
        this.setState({
            paused: false
        })
    }
    else 
    {
        this.setState({
            paused: true
        })
    }

}
    render()
    {
        // this.timesRendered++;
        // console.log("clickarea", this.timesRendered)
        // if(this.props.renderCount >= this.timesRendered)
        // {
        //     this.clear = setTimeout(() =>
        //     {
        //      this.spawnBox();
        //     }, 1000)
        // }
        // if(this.state.paused)
        // {
        //     clearTimeout(this.clear); 
        // }
        const boxes = this.state.displayBoxes.map((curVal,index) =>
        {
            return(
                <Box 
                key={curVal} 
                index={index}
                paused = {this.state.paused}
                destroy={(index,stop) => this.despawnBox(index,stop)}
                toPop={(name, color) => this.props.method(name,color) }
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