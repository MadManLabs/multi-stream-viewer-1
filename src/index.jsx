var React         = require('react');
var ReactDOM      = require('react-dom');
var Viewer = require('./components/Viewer.jsx');

ReactDOM.render(
  <Viewer url="/api/viewer"/>,
  document.getElementById('react-container')
);
