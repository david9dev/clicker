import React, {Component} from 'react'
import './Clickarea.css'

class Clickarea extends Component
{
    constructor()
    {
        super();
        this.state ={
            displayBoxes: [],
            recentClicked: {},
            number: 0
        }
        this.spawnBox = this.spawnBox.bind(this);
        this.reset = this.reset.bind(this);
    }
spawnBox()
{
    let int = this.state.number + 1;
    this.setState({
        number: int
    })
}

reset(reset)
{
    clearTimeout(reset);
    this.setState({
        number: 0
    })
}
    render()
    {
     let reset = setTimeout(() =>
        {
            this.spawnBox();
        }, 1000)

        return(
            <div className='clickarea'>
                <button
                onClick={() => this.reset(reset)}>
                    click me
                </button>
                {this.state.number}
            </div>
        )
    }
}

export default Clickarea;