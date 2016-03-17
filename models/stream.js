'use strict';

var mongoose = require('mongoose');
var searchable = require('mongoose-searchable');

var streamSchema = new mongoose.Schema({
  channel: String
});

streamSchema.plugin(searchable);

module.exports = mongoose.model('Stream', streamSchema);
