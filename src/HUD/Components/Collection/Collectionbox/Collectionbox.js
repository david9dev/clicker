import React from 'react';
import './Collectionbox.css';

function Collectionbox(props)
{
    //console.log(props.boxes)
    const collection = props.boxes.map((curVal,index) => 
    {

        return(
        <img
            src={curVal.img} alt={curVal.name}
            key={index}
            className='caughtBox'
            onClick={() => props.method(curVal.id)}
            />
        )
    })
 return(

     <div className='collection'>
         {collection}
     </div>
 )
}

export default Collectionbox