'use strict';

var React = require('react');

var Stream = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Stream</h4>
        {this.props.stream}
      </div>
    );
  }
});

module.exports = Stream;
