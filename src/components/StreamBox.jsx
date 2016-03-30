'use strict';

var React = require('react');
var Stream = require('./Stream.jsx');

var StreamBox = React.createClass({
  deleteStream: function(e) {
    e.preventDefault();
    var targetedStreamId = e.target.id;
    if (!targetedStreamId) return;

    this.props.onDelete({stream: targetedStreamId});
  },
  render: function() {
    var self = this;
    var key = 0;
    var streams = this.props.stream.map(function(channel) {
      key++;
      return (
        <div>
          <Stream channel={channel.stream} key={key}/>
          <button type="button" onClick={self.deleteStream} id={channel.stream} className="btn btn-default"><span className="glyphicon glyphicon-remove"></span></button>
        </div>
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
