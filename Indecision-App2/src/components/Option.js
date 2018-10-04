import React from 'react';

const Option = (props) => (
    <div>
        {props.optionsText}
        <button 
            onClick={()=>{
                props.deleteOption(props.optionsText);
            }}>
            Remove
        </button>
    </div>
);

export default Option;

