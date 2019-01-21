import React, {Component} from 'react'
import Editbutton from './Editbutton/Editbutton'

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
                <div key={index}>

                    <div>
                        {curVal.name}
                    </div>

                    <Editbutton
                    id={curVal.id}
                    method={this.props.method}/>

                    <div 
                    className='whole'
                    style={{backgroundColor: curVal.color}}
                    >
                     {curVal.name}
                    </div>

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