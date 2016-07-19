var React = require('react')
var Dropdown = require('./dropdown')

var options = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Pecan Pie',
    'Coconut Creme Pie'
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
