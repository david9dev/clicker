import React from 'react';

function Collection(props)
{
    //console.log(props.boxes.name);
 return(
     <div>
         {props.boxes[0].name}
     </div>
 )
}

export default Collection;