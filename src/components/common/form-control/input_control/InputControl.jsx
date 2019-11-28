import React from 'react';
import s from './InputControl.module.css'

const InputControl = ({input, meta: { touched, error, active}, ...props})=>{
    let err = touched&!active&error!=undefined?true:false; 
    return (
        <div>
            <input {...input} {...props} className = {err && s.error}/>
            {err && <div className = {s.messageError}>{error}</div>}
        </div>
        
    );
}

export default InputControl;