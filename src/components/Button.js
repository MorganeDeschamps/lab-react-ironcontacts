import React from "react";
import 'bulma/css/bulma.css';

function Button(props) {

    const {buttonName, params, handleFunction, buttonClass} = props

    return (
        <button class={buttonClass} onClick={()=>handleFunction(params)}> {buttonName} </button>
    );
}

export default Button;