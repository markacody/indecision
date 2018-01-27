import React from 'react';
import Option from './Option';

//Event handlers need help binding this, so use bind(this). Do it inline or at the class level with a class constructor.
const Options = (props) => {
    return (
        <div>
            <p>Your Options</p>
            {props.options.length === 0 && <p>Please add your options above to get started.</p>}
            {
                    props.options.map((option) =>
                    <Option 
                        key={option} 
                        optionText={option}
                        deleteOption={props.deleteOption}
                    />
                )   
            }
            <button onClick={props.deleteOptions}>Remove All</button>
        </div>
    )
};

export default Options;