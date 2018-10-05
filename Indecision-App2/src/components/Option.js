import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.itemNumber}. {props.optionsText}</p> 
        <button 
            className="button button--link" 
            onClick={()=>{
                props.deleteOption(props.optionsText);
            }}>
            Remove
        </button>
    </div>
);

export default Option;

