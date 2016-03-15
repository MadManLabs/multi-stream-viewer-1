'use strict';

var express = require('express');
var router = express.Router();
var TwitchClient = require('node-twitch-api');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});

/**
 * GET /api/viewer
 * viewer with up to 4 streams
 */

router.get('/api/viewer', function(req, res) {
  var client = new TwitchClient({
    'scope': 'user_read channel_real'
  });
  res.send([{stream: 'GET /api/viewer'}]);

  client.get('/channels/:channel/videos', {channel: 'cigcommunity'}, function(err, res) {
    console.log(err || res);
  });
});

/**
 * GET /api/login
 * user login
 */

router.get('/api/login', function(req, res) {
  res.send({stream: '/api/login'});
});

/**
 * GET /api/search
 * stream search
 */

router.get('/api/search', function(req, res) {
  res.send({results: '/api/search'});
});

module.exports = router;
