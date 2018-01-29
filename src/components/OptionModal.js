import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal 
           //use the not operator twice to convert values to booleans. Undefined is false and all others are true. This toggles between true and false to show/hide.
            isOpen={!!props.selectedOption}
            //Better usability for closing modal with ESC or by clicking outside of target area.
            onRequestClose={props.clearOption}
            //Required for better accessibility
            contentLabel="Selected Option"  
            //Required to transition out 
            closeTimeoutMS={400}
            //Required to apply own styles
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.clearOption}>Okay</button>
        </Modal>
);

export default OptionModal;