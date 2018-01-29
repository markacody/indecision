import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

//Components with state are class-based. Simple presentational components can be function-based.
//Create class-based components by extending React's parent class, followed by a call to render.

class IndecisionApp extends React.Component {
    //define the default state
    state = {
        options: [],
        selectedOption: undefined
    };
    //Update, delete, and clear event handlers are below
    deleteOptions = () => {
        this.setState(() => ( {options: [] } )); //alternate syntax is more economical. return an object by wrapping it in parentheses. Without (), {} is read as a function body, which would return undefined.
    };
    deleteOption = (optionRemoved) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionRemoved !== option;
            })
        }));
    };
    chooseOption = () => {
            const randomNbr = Math.floor(Math.random() *   this.state.options.length);
            const option = this.state.options[randomNbr];
            this.setState(() => ({
                selectedOption: option
            }));
    };
    addOption = (option) => {
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
    };
    clearOption = () => {
        this.setState(() => ({
           selectedOption: undefined 
        }));
    };
    //lifecycle methods are available only on class based methods: mount, update, unmount. These use local storage to load, save, and store data between visits.
    componentDidMount(){
        //Ensure that you mount the app only when options in local storage are not null. Catch any errors resulting from invalid JSON.
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
    
    render() {
        const subtitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <AddOption
                        addOption={this.addOption}
                     />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            deleteOptions={this.deleteOptions}
                            deleteOption={this.deleteOption}
                        />
                    </div>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        chooseOption={this.chooseOption}
                    />
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearOption={this.clearOption}
                />
            </div>
        )
    }
}
//After rendering, event handlers are available as props in the components that use them. For example: onClick={props.clearOption}

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;