import React, {useState} from "react";
import WaterOperations from "./WaterOperations";

function OperationButton(props){

    //! refactor (muy necesario). empezar de vuelta (solo la lógica, no el diseño)

    //? BUG: se pueden sumar numeros negativos

    //TODO: Cambiar la forma en la que me organizo los numeros (vosos y ml):
    // let water = {
    //     glasses: 0,
    //     howManyGlasses: 0,
    //     waterMl: 0,
    //     howManyMl:0
    // }
    // Tambien puedo desestructurar el obj, para que pueda acceder a la var mas facil

    //TODO: funcion para sumar y restar vasos, que tambien sirva para sumar y restar en cantidades de agua (como ml, oz, l)



    const [glasses, setGlasses] = useState(0);
    const [glassesToOperate, setGlassesToOperate] = useState(0);
    const [waterMl, setWaterMl] = useState(0);
    const [quantityToOperateMl, setQuantityToOperateMl] = useState(0);
    
    // For Glasses:
    
    function getInputG(event){
        let value = Number(event.target.value);
        setGlassesToOperate(value);
    }
    
    // function(sumOrSub, glassesOrMl)
    
    function sumGlasses(){
        if (glassesToOperate !== 0) {
            setGlasses(glasses + glassesToOperate);
            setWaterMl(waterMl + glassesToOperate * 250);
            setGlassesToOperate(0);
        } else {
            setGlasses(glasses + 1);
            setWaterMl(waterMl + 250);
        }
    }
    

    function subtractGlasses(){
        if (glasses > 0) {
            if (glassesToOperate !== 0) {
                setGlasses(glasses - glassesToOperate);
                setWaterMl(waterMl - glassesToOperate * 250);
                setGlassesToOperate(0);
            } else {
                setGlasses(glasses - 1);
                setWaterMl(waterMl - 250);
            }
        }
    }

    //For ml (Ml):

    function getInputMl(event){
        let value = Number(event.target.value); //Agarro el value del input
        setQuantityToOperateMl(value);
    }
    
    function sumWaterMl(){
        if (quantityToOperateMl !== 0) {
            setWaterMl(waterMl + quantityToOperateMl);
            setQuantityToOperateMl(0);
        } else {
            setWaterMl(waterMl + 100);
        }

    }
    
    function subtractWaterMl(){
        if (waterMl > 0) {
            if (quantityToOperateMl !== 0) {
                setWaterMl(waterMl - quantityToOperateMl);
                setQuantityToOperateMl(0);
            } else {
                setWaterMl(waterMl - 100);
            }
        }
    }

    //For changing units (ml, l or oz):
    return <div className="water-counter">
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
        <h2 className="changeUnits">{waterMl} ml</h2>

        <WaterOperations
        getInput={getInputMl}
        quantity={quantityToOperateMl}
        sumWater={sumWaterMl}
        subtractWater={subtractWaterMl}
        />
    </div>
}

export default OperationButton;