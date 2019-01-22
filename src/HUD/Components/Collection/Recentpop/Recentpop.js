import React from 'react'
import './Recentpop.css'

function Recentpop(props)
{
    let content = "";
    let img = "";
    if(props.box)
    {
        content = props.box.name;
        img = props.box.img
    }
    return(
        <div className='recentpop' >
        <div className='text'>
        {content}
        </div>
        <img className='popimg'src={img} alt={content}/>
        </div>
    )
}

export default Recentpop;