import React from 'react';//relative path
import ReactDOM from 'react-dom';

import IndecisionApp from "./components/IndecisionApp"//absolute path
import 'normalize.css/normalize.css'
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));


