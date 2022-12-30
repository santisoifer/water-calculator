import React, {useState} from "react";
import WaterOperations from "./WaterOperations";

function OperationButton(props){
    const [glasses, setGlasses] = useState(0);
    const [glassesToOperate, setGlassesToOperate] = useState(0);
    const [waterMl, setWaterMl] = useState(0);
    const [quantityToOperateMl, setQuantityToOperateMl] = useState(0);
    
    // For Glasses:
    
    function getInputG(event){
        let value = Number(event.target.value);
        setGlassesToOperate(value);
    }
    
    function sumGlasses(){
        setGlasses(glasses + glassesToOperate);
        setWaterMl(waterMl + glassesToOperate * 250);
        setGlassesToOperate(0);
    }
    
    function subtractGlasses(){
        if (glasses > 0) {
            setGlasses(glasses - glassesToOperate);
            setWaterMl(waterMl - glassesToOperate * 250);
            setGlassesToOperate(0);
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

    //For changing units (ml, l or oz):
    return <div>
        {/* Glasses: */}
        <h2>{glasses} glasses</h2>
        <p>(of 250ml each one)</p>
        
        <WaterOperations
        getInput={getInputG}
        quantity={glassesToOperate}
        sumWater={sumGlasses}
        subtractWater={subtractGlasses}
        />
        
        {/* ml: */}
        {/* //TODO: Hover para cambiar a pointer */}
        <h2 className="">{waterMl} ml</h2>

        <WaterOperations
        getInput={getInputMl}
        quantity={quantityToOperateMl}
        sumWater={sumWaterMl}
        subtractWater={subtractWaterMl}
        />
    </div>
}

export default OperationButton;