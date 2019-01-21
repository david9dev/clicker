import React from 'react'
import './Recentpop.css'

function Recentpop(props)
{
    let content = "";
    let color = "#1234567"
    if(props.box)
    {
        content = props.box.name;
        color = props.box.color;
    }
    return(
        <div className='recentpop' style={{backgroundColor: color}}>
        <div className='text'>
        {content}
        </div>
        </div>
    )
}

export default Recentpop;