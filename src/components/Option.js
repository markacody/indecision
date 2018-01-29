import React from 'react';

//Below the function body and return statement are correct but not needed. With stateless functional components, the HTML and JSX can be implicitly returned with this syntax const Option = (props) => (<div>...</div>).

const Option = (props) => {
    //The deleteOption function needs the option not the event object, so avoid referencing the onClick handler. Instead, pass in an arrow function that directs the event object and option text to the right places.
    return (
        <div className="option">
           <p>{props.count}. {props.optionText}</p>
            <button className="button button--link"
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