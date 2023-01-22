import React, { useState } from "react";
import WaterOperations from "./WaterOperations";

function OperationButton(props) {
    const [water, setWater] = useState({
        glasses: 0,
        glassesToOperate: 0,
        waterMl: 0,
        mlToOperate: 0
    });

    const { glasses: Glasses, glassesToOperate, waterMl: WaterMl, mlToOperate } = water;

    function getInput(event) {
        if (event.target.name === "glassesInput") {
            const glassesToOperate = Number(event.target.value);
            if (glassesToOperate >= 0) {
                setWater(prevValue => { return { ...prevValue, glassesToOperate } });
            }
        }
        else if (event.target.name === "mlInput") {
            const mlToOperate = Number(event.target.value);
            if (mlToOperate >= 0) {
                setWater(prevValue => { return { ...prevValue, mlToOperate } });
            }
        }
    }

    function operateWater(event) {
        const name = event.target.name;
        switch (name) {

            // For glasses:
            case "addGlassesButton":
                const addGlasses = Glasses + glassesToOperate;
                const addMlByGlasses = WaterMl + glassesToOperate * 250;
                setWater(prevValue => ({ ...prevValue, glasses: addGlasses, glassesToOperate: 0, waterMl:addMlByGlasses}));
                break;
            case "subGlassesButton":
                const subGlasses = Glasses - glassesToOperate;
                const subMlByGlasses = WaterMl - glassesToOperate * 250;
                if (subGlasses >= 0 && subMlByGlasses >= 0) {
                    setWater(prevValue => ({ ...prevValue, glasses: subGlasses, glassesToOperate: 0, waterMl:subMlByGlasses }));
                }
                break;
            // For ml:
            case "addMlButton":
                const addMl = WaterMl + mlToOperate;
                setWater(prevValue => ({ ...prevValue, waterMl: addMl, mlToOperate: 0 }));
                break;
            case "subMlButton":
                const subMl = WaterMl - mlToOperate;
                if (subMl >= 0) {
                    setWater(prevValue => ({ ...prevValue, waterMl: subMl, mlToOperate: 0 }));
                }
                break;

            default:
                console.log("Error: None of the buttons match with expected results");
                break;
        }
    }

    return <div className="water-counter">
        {/* Glasses: */}
        <h2>{Glasses} glasses</h2>
        <p>(of 250ml each one)</p>

        <WaterOperations
            name="glassesInput"
            addButtonName="addGlassesButton"
            subButtonName="subGlassesButton"
            getInput={getInput}
            quantity={glassesToOperate}
            addWater={operateWater}
            subtractWater={operateWater}
        />

        {/* ml: */}
        <h2 className="changeUnits">{WaterMl} ml</h2>

        <WaterOperations
            name="mlInput"
            addButtonName="addMlButton"
            subButtonName="subMlButton"
            getInput={getInput}
            quantity={mlToOperate}
            addWater={operateWater}
            subtractWater={operateWater}
        />
    </div>
}

export default OperationButton;