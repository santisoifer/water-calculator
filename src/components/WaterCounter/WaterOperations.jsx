import React from "react";

function WaterOperations(props){
    return (
        <div>
        <input
        onChange={props.getInput}
        type="number"
        value={props.quantity} 
        />
        <button className="operationButtons" onClick={props.sumWater}>+</button>
        <button className="operationButtons" onClick={props.subtractWater}>-</button>
</div>
    )
}

export default WaterOperations;