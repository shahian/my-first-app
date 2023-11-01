import React from "react";
const Input=(props)=>{
    return(
        <>
        <label >{props.text}</label>
        <input type={props.type} name={props.name} />
        </>
    )
}

export default Input;