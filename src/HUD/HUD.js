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
        .catch((error) =>
        {
            console.log(error);
            alert("error");
        })
    }

    updateBox(boxId)
    {

    }

    deleteBox(boxId)
    {
        axios.delete(`http://localhost:3002/boxes/${boxId}`)
        .then((response) =>
        {
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

    render()
    {
            const {boxes} = this.state;
            
            return(
                <div className='HUD'>
                <section className ='left'>
                    <Recentpop box={boxes[boxes.length - 1]}/>
                    <Collection boxes={boxes} method={(id) => this.deleteBox(id)}/>
                    {/* <button>
                        display collection
                    </button> */}
                </section>
                <main>
                    <Clickarea
                    renderCount={this.timesRendered} 
                    method={(name,color) => this.createBox(name,color)}/>
                </main>
                <section className ='right'>

                </section>
                </div>
            );
    }
}

export default HUD;