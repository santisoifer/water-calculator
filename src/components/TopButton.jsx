import React from "react";

function TopButton(props){
    return <a className="setButton" href={props.link}>{props.icon}</a>
}

export default TopButton;