var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

// ReactDOM.render(
//   <h1>React Boilerplate App</h1>,
//   document.getElementById('app')
// );

// require('./redux-todo-example.jsx');
require('./redux-example.jsx');