'use strict';

var React = require('react');
var Search = require('./Search.jsx');
var StreamBox = require('./StreamBox.jsx');
var Login = require('./Login.jsx');

var Viewer = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  loadStreamsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: '',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleLogin: function() {
    $.ajax({
      url: this.props.url + '/login',
      dataType: '',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadStreamsFromServer();
  },

  render: function() {
    return (
      <div>
        <h1>Multi Stream Viewer</h1>
        <Login onLoginSubmit={this.handleLogin}/>
        <Search/>
        <StreamBox/>
      </div>
    );
  }
});

module.exports = Viewer;
