import React from 'react';
import './button.css'

const Button = ( props ) => {
    return ( 
        <>
            <button className="theme-btn">{props.title}</button>
        </>
     );
}
 
export default Button;

