import React, {Component} from 'react';
import axios from 'axios';
import './HUD.css'
import Clickarea from './Components/Clickarea/Clickarea';
import Collection from './Components/Collection/Collection';
import Recentpop from './Components/Recentpop/Recentpop';

class HUD extends Component
{
    constructor()
    {
        super();
        this.state = {
            boxes: [],
        };

        // this.timesRendered = 10;

    }

    componentDidMount()
    {
        axios.get('http://localhost:3002/boxes')
        .then((response) =>
        {
            //console.log(response.data);
            this.setState({
                boxes: response.data
            })
        })
        .catch((error) =>
        {
            console.log(error);
            alert("error");
        })
    }
    createBox(name,color)
    {
        const newBox = {
            name: name,
            color: color
        }
        axios.post('http://localhost:3002/boxes',newBox)
        .then((response) =>
        {
            this.setState({
                boxes: response.data
            })
        })
    }

    updateBox(boxId)
    {

    }

    deleteBox(boxId)
    {

    }

    render()
    {
        // this.timesRendered++;
        // console.log("HUD",this.timesRendered)
        if(this.state.boxes[0])
        {
            const {boxes} = this.state;
            
            return(
                <div className='HUD'>
                    <Collection boxes={boxes}/>
                    <Recentpop box={boxes[boxes.length - 1]}/>
                    <Clickarea
                    renderCount={this.timesRendered} 
                    method={(name,color) => this.createBox(name,color)}/>
                </div>
            );
        }
        return(
            <div>
                loading
            </div>
        );
    }
}

export default HUD;