//Indecision App
//NOTES
//Components with state are class-based. Simple presentational components can be function-based.
//Create class-based components by extending React's parent class, followed by an obligatory call to render.

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        //bind this to methods if used with events
        this.deleteOptions = this.deleteOptions.bind(this);
        this.chooseOption = this.chooseOption.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        //define the default state
        this.state = {
           options: props.options
        };
    }
    //lifecycle methods are available only on class based methods: mount, update, unmount. 
    componentDidMount(){
        //Ensure that you only mount the app when options in local storage are not null and catch any errors resulting from invalid JSON.
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
                console.log('fetching data from local storage');
            }    
        } catch (e) {
            //if invalid JSON you can do nothing or clear local storage of the data that is corrupted   
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('saving data to local storage');
            }
    }
    componentWillUnmount() {
        console.log('preserving state and data in local storage');
    }
    deleteOptions() {
        this.setState(() => ( {options: [] } )); //alternate syntax is more economical. return an object by wrapping it in parentheses. Without (), {} is read as a function body, which would return undefined.
    }
    deleteOption(optionRemoved) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionRemoved !== option;
            })
        }));
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
        const subtitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <AddOption
                    addOption={this.addOption}
                 />
                <Options 
                    options={this.state.options} 
                    deleteOptions={this.deleteOptions}
                    deleteOption={this.deleteOption}
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    chooseOption={this.chooseOption}
                />  
            </div>
        )
    }
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}              
        </div>
    )
};

//Default props
Header.defaultProps = {
    title: 'Indecision'
};
IndecisionApp.defaultProps = {
    options: []
};

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

//Event handlers need help binding this, so use bind(this). Do it inline or at the class level with a class constructor.
const Options = (props) => {
    return (
        <div>
            <p>Your Options</p>
            {props.options.length === 0 && <p>Please add your options above to get started.</p>}
            {
                    props.options.map((option) =>
                    <Option 
                        key={option} 
                        optionText={option}
                        deleteOption={props.deleteOption}
                    />
                )   
            }
            <button onClick={props.deleteOptions}>Remove All</button>
        </div>
    )
};

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
//Below is the class-based version of the same thing (Action) Notice the call to render which is not needed in the functional component
//class Action extends React.Component {
//    render() {
//        return (
//            <div>
//                <button 
//                    onClick={this.props.chooseOption}
//                    disabled={!this.props.hasOptions}
//                >
//                    2. What should I do?
//                </button>
//            </div>
//        )
//    }
//}

//Stateless components access props as an argument (same as this.props)
//const User = (props) => {
//    return (
//        <div>
//            <p>Name: {props.name}</p>
//            <p>Age: {props.age}</p>
//        </div>
//    )
//};

//After creating components, render with ReactDOM.render
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));