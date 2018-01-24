console.log("App.js is running");


//Create app data object
const appData = {
    title: 'Indecision',
    subtitle: 'Outsource your choices',
    options: []
};

//Create event handler for new form submissions
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    const option = e.target.elements.option.value;
    if (option) {
        appData.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};
//Create remove all button
const removeAll = () => {
    console.log('User requested deletion');
    appData.options = [];
    renderApp();
};

const makeDecision = () => {
    let randomNbr = Math.floor(Math.random() * appData.options.length);
    console.log(randomNbr);
    const option = appData.options[randomNbr];
    alert(option);
};

const appRoot = document.getElementById('app');

//Create template with JSX and host within a function that renders the template and that can be called when data changes. Functions inside the template are expressions and should not end in ; like statements.
const renderApp = () => {
    const template = (
        <div>
            <h1>{appData.title}</h1>
            {(appData.subtitle) && <p>{appData.subtitle}</p>}
            <p>{appData.options.length > 0 ? 'Here are your options' : 'Enter your options'}</p>
            {appData.options}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <hr/>
            <button disabled={appData.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <hr/>
            <ol>
                {
                   appData.options.map((option) => {
                       return <li key={option}>{option}</li>
                   })
                }
            </ol>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();