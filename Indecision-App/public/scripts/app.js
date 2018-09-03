"use strict";

var template = React.createElement(
  "h1",
  null,
  "This is a JSX, that just changed again"
);
var appRoot = document.getElementById("app");

ReactDom.render(template, appRoot);
