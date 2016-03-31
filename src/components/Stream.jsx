'use strict';

var React = require('react');
var Iframe = require('react-iframe');

var Stream = React.createClass({
  render: function() {
    return (
        <Iframe className="iframe" url={this.props.channel} position="relative" height="400px" width="800px"/>
    );
  }
});

module.exports = Stream;
