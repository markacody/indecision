import React from 'react';

const Option = (props) => {
    //The deleteOption function needs the option not the event object, so avoid referencing the onClick handler instead, instead pass in an arrow function that direct the event object and option text to the right places.
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.deleteOption(props.optionText);   
                }}
                >
                    Remove
            </button>
        </div>
    )
}

export default Option; 