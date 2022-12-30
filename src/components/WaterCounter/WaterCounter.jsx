import React, {useState} from "react";
import WaterOperations from "./WaterOperations";

function OperationButton(props){
    const [waterG, setWaterG] = useState(0);
    const [quantityToOperateG, setQuantityToOperateG] = useState(0);
    const [waterMl, setWaterMl] = useState(0);
    const [quantityToOperateMl, setQuantityToOperateMl] = useState(0);

    
    // For Glasses (G):
    
    function getInputG(event){
        let value = Number(event.target.value);
        setQuantityToOperateG(value);
    }
    
    function sumWaterG(){
        setWaterG(waterG + quantityToOperateG);
        setQuantityToOperateG(0);
    }
    
    function subtractWaterG(){
        if (waterG > 0) {
            setWaterG(waterG - quantityToOperateG);
            setQuantityToOperateG(0);
        }
    }
    
    //For ml (Ml):

    function getInputMl(event){
        let value = Number(event.target.value); //Agarro el value del input
        setQuantityToOperateMl(value);
    }
    
    function sumWaterMl(){
        setWaterMl(waterMl + quantityToOperateMl);
        setQuantityToOperateMl(0);
    }
    
    function subtractWaterMl(){
        if (waterMl > 0) {
            setWaterMl(waterMl - quantityToOperateMl);
            setQuantityToOperateMl(0);
        }
    }

    return <div>
        {/* Glasses: */}
        <h2>{waterG} glasses</h2>
        <p>(of 250ml each one)</p>
        
        <WaterOperations
        getInput={getInputG}
        quantity={quantityToOperateG}
        sumWater={sumWaterG}
        subtractWater={subtractWaterG}
        />
        
        {/* ml: */}
        <h2>{waterMl} ml</h2>

        <WaterOperations
        getInput={getInputMl}
        quantity={quantityToOperateMl}
        sumWater={sumWaterMl}
        subtractWater={subtractWaterMl}
        />
    </div>
}

export default OperationButton;