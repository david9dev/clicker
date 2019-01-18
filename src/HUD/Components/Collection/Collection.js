import React from 'react';

function Collection(props)
{
    //console.log(props.boxes.name);
    const collection = props.boxes.map((curVal,index) => 
    {
        return(<div key={index}>{curVal.name}</div>)
    })
 return(

     <div>
         {collection}
     </div>
 )
}

export default Collection;