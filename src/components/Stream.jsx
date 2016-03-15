'use strict';

var React = require('react');
var Iframe = require('react-iframe');

var Stream = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Stream</h4>
        <Iframe url={this.props.channel} />
      </div>
    );
  }
});

module.exports = Stream;
