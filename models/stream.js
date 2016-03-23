'use strict';

var mongoose = require('mongoose');
var searchPlugin = require('mongoose-search-plugin');

var streamSchema = new mongoose.Schema({
  channel: String
});

streamSchema.plugin(searchPlugin, {
  keywordsPath: '_keywords',
  relavancePath: '_relevance',
  fields: ['channel'],
  stemmer: 'PorterStemmer',
  distance: 'JaroWinklerDistance'
});

module.exports = mongoose.model('Stream', streamSchema);
