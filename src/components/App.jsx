import React from "react";
import TopButton from "./TopButton";
import WaterCounter from "./WaterCounter/WaterCounter";


function App(props){
    return (
    <div>
        <TopButton link="#" icon="User"/>
        <TopButton link="#" icon="Settings"/>
        <WaterCounter />
    </div>
    );
} 

export default App;