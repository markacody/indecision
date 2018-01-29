import React from 'react';

export default class AddOption extends React.Component {
    state = {
      error: undefined  
    };
//Without the Babel plug-in, event handlers would have to be this-bound to the parent class using the syntax below.
//    constructor(props) {
//        super(props);
//        this.addOption = this.addOption.bind(this);
//    }
//...and the event handler would not be an arrow function, just name (){}...
    addOption = (e) => {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        
        this.setState(() => {
                return {error};
            });
        
        //clear the input if there is no error, that is, set the form field to an empty string
        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    render() {
        return (
            <div>
               <div className="widget-header"><h3>Enter an option...</h3></div>
                
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addOption}>
                    <input className="add-option__input" type="text" name="option"/><br/>
                    <button className="button">Add the option to the list below</button>
                </form>
            </div>
        );
    }
}

