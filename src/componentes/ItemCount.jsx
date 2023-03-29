import React, { useState } from "react";





function ItemCount(props) {
    const [count, setCount] = useState(0);
    const stock = 5;

function handleAdd(){

    if ( stock = props ){
        setCount ( count )
    }
    else { setCount (count + 1)
}}

        

function handleSubstract() {
    setCount( count - 1);
}

return (
    <div>
        <button onClick={handleSubstract}>-</button>
        <span> {count} </span>
        <button onClick={handleAdd}>+</button>
    </div>
)
    
}

export default ItemCount;
