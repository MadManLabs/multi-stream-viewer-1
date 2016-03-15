'use strict';

var React = require('react');
var Iframe = require('react-iframe');

var Stream = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Stream</h4>
        <Iframe className="iframe" url={this.props.channel} height="50%" width="50%"/>
      </div>
    );
  }
});

module.exports = Stream;
