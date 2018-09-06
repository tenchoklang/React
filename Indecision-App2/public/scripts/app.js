"use strict";

console.log("app is running");
var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two']
};

var onFormSubmit = function onFormSubmit(e) {
    //e is the event object we get returned for events we set up
    e.preventDefault(); //this stops the full page refresh

    var option = e.target.elements.option.value;
    console.log("Form Submitted: " + option);

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reRender();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    console.log(app.options.length);
    reRender();
};

var onMakeDecison = function onMakeDecison() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var reRender = function reRender() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Header"
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are Your Optsions " + app.options.toString() : "No Options"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove All"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecison },
            "What should I do"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (val, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    "Option: ",
                    val
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

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
