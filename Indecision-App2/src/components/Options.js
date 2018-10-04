import React from 'react';
import Option from './Option'


const Options = (props) => {
    return(
        <div>
            <button onClick={props.deleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>PLEASE ADD AN OPTION</p>}
            {
                props.options.map((val) => 
                    <Option 
                        key={val} 
                        optionsText={val}
                        deleteOption={props.deleteOption}/>)
            }
        </div>
    );
}

export default Options;