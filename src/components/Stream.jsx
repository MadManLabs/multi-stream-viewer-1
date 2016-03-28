'use strict';

var React = require('react');
var Iframe = require('react-iframe');

var Stream = React.createClass({
  render: function() {
    return (
      <div className="col-lg-6">
        <Iframe className="iframe" url={this.props.channel} position="relative" height="300px" width="500px"/>
        <button type="button" className="btn btn-default">Delete</button>
      </div>
    );
  }
});

module.exports = Stream;
