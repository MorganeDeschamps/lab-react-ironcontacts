import React from "react";
import 'bulma/css/bulma.css';

function Button(props) {

    const {buttonName, params, handleFunction, buttonClass} = props
    const {contacts, setContacts} = props.paramsTest

    return (
        <button class={buttonClass} onClick={()=>handleFunction(contacts, setContacts)}> {buttonName} </button>
    );
}

export default Button;