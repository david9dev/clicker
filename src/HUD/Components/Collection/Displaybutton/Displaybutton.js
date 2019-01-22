import React, {Component} from 'react'
import Editbutton from './Editbutton/Editbutton'
import './Displaybutton.css'

// function Displaybutton()
// {
//     return(
//         <button>
//             Display
//         </button>
//     );
// }

class Displaybutton extends Component
{
    constructor()
    {
        super();
        this.state ={
            display: false
        }
    }

    handletoggle()
    {
        if(this.state.display)
        {
            this.setState({
                display: false
            })
        }

        else
        {
            this.setState({
                display: true
            })
        }
    }
    render()
    {
   
        
        const wholeCollection = this.props.boxes.map((curVal,index) =>
        {
            if(this.state.display)
            {
                return( 
                <div className='displayContainer' key={index}>

                    <div>
                        {curVal.name}
                    </div>

                    <Editbutton
                    id={curVal.id}
                    method={this.props.method}/>

                    <img src={curVal.img} alt={curVal.name}
                    className='whole'
                    />

                </div>
                );
                
            }
            return("");
        });
        let lable = "";
        if(this.state.display)
        {
            lable = "on"
        }
        else
        {
            lable = "off"
        }
        return(
            <div>
                <button
                onClick={() => this.handletoggle()}
                >
                    display
                </button>
                <div className={lable}>
                {wholeCollection}
                </div>
            </div>
        )
    }
}
export default Displaybutton;