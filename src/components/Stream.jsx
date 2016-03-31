'use strict';

var React = require('react');

var Stream = React.createClass({
  render: function() {
    return (
      <iframe
          src={this.props.channel}
          height="400"
          width="800"
          frameboarder="5"
          scrolling="no"
          allowfullscreen="true">
      </iframe>
    );
  }
});

module.exports = Stream;
