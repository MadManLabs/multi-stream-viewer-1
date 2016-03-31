'use strict';

var React = require('react');
var Search = require('./Search.jsx');
var StreamBox = require('./StreamBox.jsx');
var Login = require('./Login.jsx');

var Viewer = React.createClass({

  getInitialState: function() {
    return {stream: []};
  },

  loadStreamsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: true,
      success: function(stream) {
        this.setState({stream: stream});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleSearch: function(search) {
    $.ajax({
      url: this.props.url + '/search',
      dataType: 'json',
      cache: false,
      type: 'POST',
      data: search,
      success: function(data) {
        this.setState({data: data});
        this.forceUpdate(this.loadStreamsFromServer());
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url + '/search', status, err.toString());
      }.bind(this)
    });
  },

  handleLogin: function() {
    $.ajax({
      url: this.props.url + '/login',
      dataType: '',
      cache: false,
      success: function(data) {
        this.setState({channel: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url + '/login', status, err.toString());
      }.bind(this)
    });
  },

  handleDelete: function(stream) {
    $.ajax({
      url: this.props.url + '/delete',
      data: stream,
      type: 'POST',
      success: function(data) {
        this.setState({channel: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url + '/delete', status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadStreamsFromServer();
  },

  render: function() {
    return (
      <div>
        <Login onLoginSubmit={this.handleLogin}/>
        <Search onSearchSubmit={this.handleSearch}/>
        <StreamBox stream={this.state.stream} onDelete={this.handleDelete}/>
      </div>
    );
  }
});

module.exports = Viewer;
