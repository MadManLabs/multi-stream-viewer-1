'use strict';

var React = require('react');
var Stream = require('./Stream.jsx');

var StreamBox = React.createClass({
  render: function() {
    console.log('StreamBox', this.props.stream);
    var streams = this.props.stream.map(function(channel) {
      return (
        <Stream channel={channel.stream}/>
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
