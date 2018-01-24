//visibility toggle using React components and state changes
//define a new class as an extension of the react component class, use constructor to ensure proper this bindings, define methods, call render, and define return html
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        //event handler bindings go here.
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() { 
        return (
            <div>
                <h1>Bisivilty Gottle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                        <div>
                            <p>I'm so shy</p>
                        </div>
                    )
                }
            </div>
        )
    }    
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));