import React, {Component} from 'react';
import axios from 'axios';
import './HUD.css'
import Clickarea from './Components/Clickarea/Clickarea';
import Collection from './Components/Collection/Collection';

class HUD extends Component
{
    constructor()
    {
        super();
        this.state = {
            boxes: [{
                name: "firstBox",
                color: "#FFFFFF",
                id: 0
            }],
        };
    }

    componentDidMount()
    {
        axios.get('http://localhost:3002/boxes')
        .then((response) =>
        {
            this.setState({
                boxes: response.data
            })
        })
        .catch((error) =>
        {
            console.log(error);
            alert("couldnt get boxes");
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
            alert("couldnt create box");
        })
    }

    updateBox(string, boxId)
    {
        axios.put(`http://localhost:3002/boxes/${boxId}/${string}`)
        .then((response) =>
        {
            this.setState({
                boxes: response.data
            });
        })
        .catch((error) => 
        {
            console.log(error);
            alert("couldnt update box");
        })
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
            alert("couldnt delet boxes");
        })

    }

    render()
    {
            const {boxes} = this.state;
            
            return(
                <div className='HUD'>
                <aside>
                    <Collection
                    boxes={boxes}
                    delete={(id) => this.deleteBox(id)}
                    update={(string, id) => this.updateBox(string, id)}
                    />
                </aside>
                <main>
                    <Clickarea
                    method={(name,color) => this.createBox(name,color)}/>
                </main>
                </div>
            );
    }
}

export default HUD;