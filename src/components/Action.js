import React from 'react';

const Action = (props) => {
        return (
            <div>
                <button 
                    onClick={props.chooseOption}
                    disabled={!props.hasOptions}
                >
                    2. What should I do?
                </button>
            </div>
        )
};

export default Action; 