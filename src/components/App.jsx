import React from "react";
import TopButton from "./TopButton";
import WaterCounter from "./WaterCounter/WaterCounter";
import "../index.css"

function App(props){
    return (
    <div className="container">
        <div className="topButtons-container">
            <TopButton link="#" icon="User"/>
            <TopButton link="#" icon="Settings"/>
        </div>
        <WaterCounter />
    </div>
    );
} 

export default App;