import React, {useState} from "react";

function OperationButton(props){
    const [waterG, setWaterG] = useState(0);
    const [quantityG, setQuantityG] = useState(0);

    //TODO: Que el usuario pueda añadir l / ml

    function sumWaterG(){
        setWaterG(waterG + quantityG);
    }

    function subtractWaterG(){
        if (waterG > 0) {
            setWaterG(waterG - quantityG);
        }
    }

    function getInputG(event){
        let value = Number(event.target.value);
        setQuantityG(value);
    }

    return <div>
        <h2>{waterG} glasses</h2>
        <input
        onChange={getInputG}
        type="number"
        value={quantityG} 
        />
        <button onClick={sumWaterG}>+</button>
        <button onClick={subtractWaterG}>-</button>
    </div>
}

export default OperationButton;