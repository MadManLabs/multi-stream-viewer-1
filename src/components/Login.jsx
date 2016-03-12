'use strict';

var React = require('react');

var Login = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var login = this.state.login.trim();

    if(!login) {return;}

    this.props.onLoginSubmit({login: login});
    this.setState({login: ''});
  },

  render: function() {
    return (
      <h3>Login</h3>
    );
  }
});

module.exports = Login;
