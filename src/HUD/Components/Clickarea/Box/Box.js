import React from 'react'
import './Box.css'

// let clear = 0;
// let sec = 0;
function popBox(destroy, addCollection, index, name, color)
{
    destroy(index);
    addCollection(name, color);
    // clearTimeout(clear);
}

// async function timer(destroy, index)
// {
//     clear = setTimeout(() =>
//     {
//         console.log("timer", sec)
//         if(sec === 6)
//         {
//             clearTimeout(clear);
//             destroy(index);
//         }
//         else
//         {
//             sec += 1;
//         }
//     }, 1000)
// }

function Box(props)
{
        let boxStyle = {
            backgroundColor: 'blue',
            left: props.box.x
        }
        boxStyle.backgroundColor = props.box.color;
        const { destroy, addCollection, index, box:{name, color}} = props;
        // timer(destroy,index);
        
        return (
            <div
                className='box'
                style={boxStyle}
                onClick={() => popBox(destroy, addCollection, index, name, color)}
            >
                {props.box.name}
            </div>
        );
}
export default Box;

// class Box extends React.Component
// {
//     constructor()
//     {
//         super();

//         this.state = {
//             clear: 0,
//             sec: 0
//         }
//         this.timer = this.timer.bind(this);
//         this.popBox = this.popBox.bind(this);
//     }

//     timer(destroy, index)
// {
//     const clear = setTimeout(() =>
//     {
//         console.log("timer", this.state.sec)
//         if(this.state.sec === 6)
//         {
//             clearTimeout(this.state.clear);
//             destroy(index);
//         }
//         else
//         {
//             this.setState({
//                 sec: (this.state.sec + 1),
//                 clear: clear
//             })
//         }
//     }, 1000)
// }
// popBox(destroy, addCollection, index, name, color)
// {
//     destroy(index);
//     addCollection(name, color);
//     clearTimeout(this.state.clear);
// }

//     render()
//     {
//         this.timer(this.props.destroy, this.props.index)
//              let boxStyle = {
//             backgroundColor: 'blue',
//             left: this.props.box.x
//         }
//         boxStyle.backgroundColor = this.props.box.color;
//         const { destroy, addCollection, index, box:{name, color}} = this.props;
//         // timer(destroy,index);
        
//         return (
//             <div
//                 className='box'
//                 style={boxStyle}
//                 onClick={() => this.popBox(destroy, addCollection, index, name, color)}
//             >
//                 {this.props.box.name}
//             </div>)
//     }
// }

// export default Box;