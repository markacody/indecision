//Create components by extending React's parent class, followed by an obligatory call to render.
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        //bind this to methods if used with events
        this.deleteOptions = this.deleteOptions.bind(this);
        this.chooseOption = this.chooseOption.bind(this);
        this.addOption = this.addOption.bind(this);
        //define the default state
        this.state = {
           options: [] 
        };
    }
    deleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });    
    }
    chooseOption() {
            const randomNbr = Math.floor(Math.random() *   this.state.options.length);
            const option = this.state.options[randomNbr];
            alert(option);
    }
    addOption(option) {
        if (!option) {
            return 'Enter an option please.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Your option is already entered.';
        } else {
            this.setState((prevState) => {
                //use concat to avoid changing previous state. You can pass in the addition as itself or as an array with itself inside
                return {
                    options: prevState.options.concat(option)
                };
            });    
        }    
    }
    
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <AddOption
                    addOption={this.addOption}
                 />
                <Options 
                    options={this.state.options} 
                    deleteOptions={this.deleteOptions}
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    chooseOption={this.chooseOption}
                />  
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                
            </div>
        )
    }
}

class AddOption extends React.Component {
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

//Event handlers need help binding this, so use bind(this). Do it inline or at the class level with a class constructor.

class Options extends React.Component {
    
    render() {
        return (
            <div>
                <p>Your options are...</p>
                {
                    this.props.options.map((option) =>
                        <Option key={option} optionText={option}/>
                    )   
                }
                <button onClick={this.props.deleteOptions}>Remove All</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}


class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.chooseOption}
                    disabled={!this.props.hasOptions}
                >
                    2. What should I do?
                </button>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));