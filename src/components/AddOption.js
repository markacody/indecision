import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
          error: undefined  
        };
    }
    addOption(e) {
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
    }
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
        )
    }
}

