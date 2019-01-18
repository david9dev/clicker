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
            boxes: []
        };

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
    createBox()
    {

    }

    updateBox(boxId)
    {

    }

    deleteBox(boxId)
    {

    }

    render()
    {
        if(this.state.boxes[0])
        {
            const {boxes} = this.state;
            
            return(
                <div className='HUD'>
                    <Collection boxes={boxes}/>
                    <Recentpop box={boxes[boxes.length - 1]}/>
                    <Clickarea/>
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