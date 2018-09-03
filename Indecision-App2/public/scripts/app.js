"use strict";

console.log("app is running");
var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two']
};

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
        app.options.length > 0 ? "Here are Your Options " + app.options.toString() : "No Options"
    )
);
var appRoot = document.getElementById("app");

var user = {
    name: "tenzin",
    age: 18,
    location: "New York"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "age: ",
        user.age
    ),
    getLocation(user.location)
);

ReactDOM.render(template, appRoot);
