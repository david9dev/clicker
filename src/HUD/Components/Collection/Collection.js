import React from 'react';
import Collectionbox from './Collectionbox/Collectionbox'
import Displaybutton from './Displaybutton/Displaybutton';
import Recentpop from './Recentpop/Recentpop'
import './Collection.css'


function Collection(props)
{
    return(
        <div>
            <Recentpop
            box={props.boxes[props.boxes.length -1]}
            />
            <Collectionbox
            boxes={props.boxes}
            method={(id) => props.delete(id)}
            />
            <Displaybutton
            boxes={props.boxes}
            method={(string, id) => props.update(string,id)}
            />


        </div>
    )
}

export default Collection;