'use strict';

var React = require('react');
var Stream = require('./Stream.jsx');

var StreamBox = React.createClass({
  render: function() {
    return (
      <div>
        <h3>StreamBox</h3>
        <Stream/>
      </div>
    );
  }
});

module.exports = StreamBox;
