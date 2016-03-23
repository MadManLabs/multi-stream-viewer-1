'use strict';

var mongoose = require('mongoose');
var searchPlugin = require('mongoose-search-plugin');

var streamSchema = new mongoose.Schema({
  channel: String
});

streamSchema.plugin(searchPlugin, {
  fields: 'channel'
});

module.exports = mongoose.model('Stream', streamSchema);
