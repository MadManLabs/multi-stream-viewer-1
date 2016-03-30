'use strict';

var React = require('react');
var Stream = require('./Stream.jsx');

var StreamBox = React.createClass({
  deleteStream: function(e) {
    e.preventDefault();
    var targetedStreamId = e.target.id;
    if (!targetedStreamId) return;

    this.prop.onDelete({stream: targetedStreamId});
  },
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
        <h3>Streams</h3>
        {streams}
      </div>
    );
  }
});

module.exports = StreamBox;
