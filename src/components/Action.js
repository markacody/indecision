import React from 'react';

const Action = (props) => {
        return (
            <div className="widget__wizard">
                <button className="big-button" 
                    onClick={props.chooseOption}
                    disabled={!props.hasOptions}
                >
                    Ask the wizard what to do!
                </button>
            </div>
        )
};

export default Action; 