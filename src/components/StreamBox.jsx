'use strict';

var React = require('react');
var Stream = require('./Stream.jsx');

var StreamBox = React.createClass({
  render: function() {
    console.log('StreamBox', this.props.stream);
    var streams = this.props.stream.map(function(stream) {
      return (
        <Stream stream={stream.stream}/>
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
