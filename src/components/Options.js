import React from 'react';
import Option from './Option';

//Event handlers need help binding this, so use bind(this). Do it inline or at the class level with a class constructor.
const Options = (props) => {
    return (
        <div>
           <div className="widget-header">
                <h4 className="widget-header__title">Your list of options</h4>
                <button className="button button--link" onClick={props.deleteOptions}>Remove All</button>
            </div>
            <div>
                {props.options.length === 0 && <p className="widget__message">Please add your options above to get started.</p>}
                {
                        props.options.map((option, index) =>
                        <Option 
                            key={option} 
                            optionText={option}
                            count={index + 1}
                            deleteOption={props.deleteOption}
                        />
                    )   
                }
            </div>
        </div>
    )
};

export default Options;