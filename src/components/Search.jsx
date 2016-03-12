'use strict';

var React = require('react');

var Search = React.createClass({
  getInitialState: function() {
    return {channel: ''};
  },

  handleChannelChange: function(e) {
    this.setState({channel: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var channel = this.state.channel.trim();
    if (!channel) {return;}

    this.props.onChannelSubmit({channel: channel});
    this.setState({channel: ''});
  },

  render: function() {
    return (
      <form>
        <input value={this.state.channel} onChange={this.handleChannelChange} type="text"></input>
      </form>
    );
  }
});

module.exports = Search;
