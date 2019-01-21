import React, {Component} from 'react'

// function Collectedbox(props)
// {
//     return(
//         <div>
//             <p>
//                 {props.name}
//             </p>
//             <button>
//                 edit
//             </button>
//             <div className='box'>
//             </div>        
//         </div>
//     )
// }

class Editbutton extends Component
{
    constructor()
    {
        super();
        this.state = {
            edit:false,
            userInput: "",
        }
    }

    handleEditToggle()
    {
        if(this.state.edit)
        {
            this.setState({
                edit: false
            })
        }
        else{
            this.setState({
                edit: true
            })
        }
      
    }

    handleUserInput(value)
    {
        this.setState({
            userInput: value
        })
    }

    handleButtonClick()
    {
        const {id,method} = this.props;

        method(this.state.userInput, id);
        this.setState({
            edit: false
        });
    }


    render()
    {
        let input = <button
            onClick={() => this.handleEditToggle()}>
            edit
        </button>;

        if(this.state.edit)
        {
            input = <div>
                <input 
                onChange={(event) => this.handleUserInput(event.target.value)}
                />
                <button onClick={() => this.handleButtonClick()}>
                ok
                </button>
                <button onClick={() => this.handleEditToggle()}>
                    cancel
                </button>
            </div>
        }
        return(
            <div>
                {input}
            </div>
        )
    }
}

export default Editbutton;