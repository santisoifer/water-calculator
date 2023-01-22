import React from "react";
import WaterCounter from "./WaterCounter/WaterCounter";
import "../index.css"

function App(){
    return (
    <div className="container">
        <h1 className="heading">Water calculator</h1>
        <WaterCounter />
    </div>
    );
} 

export default App;