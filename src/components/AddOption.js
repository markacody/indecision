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
                <p>1. Add an option.</p>
                {this.state.error && <p>{this.state.error}</p>}
                <form action="" onSubmit={this.addOption}>
                    <input type="text" name="option"/><br/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

