console.log("app is running");
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two']
}

const onFormSubmit = (e) =>{//e is the event object we get returned for events we set up
    e.preventDefault();//this stops the full page refresh

    const option = e.target.elements.option.value;
    console.log("Form Submitted: " + option);

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        reRender();
    }
}

const removeAll = () => {
    app.options = [];
    console.log(app.options.length);
    reRender();
};

const onMakeDecison = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const reRender = () => {
    const template = 
    <div>
        <h1>Header</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are Your Optsions "+app.options.toString() : "No Options"}</p>
        <button onClick={removeAll}>Remove All</button>
        <button disabled={app.options.length ===0} onClick={onMakeDecison}>What should I do</button>
        <ol>
            {app.options.map((val, index) => <li key={index}>Option: {val}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
        </form>
    </div>;

    ReactDOM.render(template, appRoot);
}


const appRoot = document.getElementById("app");

reRender();



// const number = [55,101,1000];

// const template = (
//     <div>
//         {number.map((val, index) => <p key={index}>{val}</p>)}
//     </div>
// );


// console.log(number.map((val, index) => <p key={index}>Number: {val}</p>));



// const rootApp = document.getElementById("app");

// ReactDOM.render(template, rootApp);