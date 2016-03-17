'use strict';

var React = require('react');
var Stream = require('./Stream.jsx');

var StreamBox = React.createClass({
  render: function() {
    var key = 0;
    var streams = this.props.stream.map(function(channel) {
      key++;
      return (
        <Stream channel={channel.stream} key={key}/>
      );
    });
    return (
      <div>
        {streams}
      </div>
    );
  }
});

module.exports = StreamBox;
