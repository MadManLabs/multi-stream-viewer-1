'use strict';

var React = require('react');

var Search = React.createClass({
  getInitialState: function() {
    return {channel: ''};
  },

  handleSearchChange: function(e) {
    this.setState({channel: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var channel = this.state.channel.trim();
    if (!channel) {return;}

    this.props.onSearchSubmit({channel: channel});
    this.setState({channel: ''});
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.channel} onChange={this.handleSearchChange} type="text"></input>
        <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
      </form>
    );
  }
});

module.exports = Search;
