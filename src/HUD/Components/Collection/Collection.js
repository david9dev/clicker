import React from 'react';
import './Collection.css'


function Collection(props)
{
    //console.log(props.boxes)
    const collection = props.boxes.map((curVal,index) => 
    {

        return(
        <div 
            key={index}
            className='caughtBox' style={{backgroundColor: curVal.color}}
            onClick={() => props.method(curVal.id)}
            >
        </div>
        )
    })
 return(

     <div className='collection'>
         {collection}
     </div>
 )
}

export default Collection;