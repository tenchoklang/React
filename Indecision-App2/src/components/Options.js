import React from 'react';
import Option from './Option'


const Options = (props) => {
    return(
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                    className="button button--link" 
                    onClick={props.deleteOptions}>
                    Remove All
                </button>
            </div>
            {props.options.length === 0 && <p className="widget__message">PLEASE ADD AN OPTION</p>}
            {
                props.options.map((val, index) => 
                    <Option 
                        className="button button--link" 
                        itemNumber={index+1}
                        key={val} 
                        optionsText={val}
                        deleteOption={props.deleteOption}/>)
            }
        </div>
    );
}

export default Options;