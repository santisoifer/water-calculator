import React from "react";

function WaterOperations(props){
    return (
        <div>
        <input
        name={props.name}
        onChange={props.getInput}
        type="number"
        value={props.quantity} 
        />
        <button name={props.addButtonName} className="operationButtons" onClick={props.addWater}>+</button>
        <button name={props.subButtonName} className="operationButtons" onClick={props.subtractWater}>-</button>
</div>
    )
}

export default WaterOperations;