'use strict';

var express = require('express');
var router = express.Router();
var Stream = require('../models/stream');
var TwitchClient = require('node-twitch-api');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});

/**
 * GET /api/viewer
 * viewer with up to 4 streams
 */

router.get('/api/viewer', function(req, res, next) {
  var streamLink = 'http://player.twitch.tv/?channel=';

  Stream.find()
    .exec(function(err, streams) {
      console.log('streams', streams);
      if (err) return next(err);

      if (streams.length === 0) {
        res.send([{stream: streamLink + 'twitch'}]);
      } else {
        var streamUrls = streams.map(function(stream) {
          return {stream: streamLink + stream.channel};
        });
        res.send(streamUrls);
      }
    });

  // var client = new TwitchClient({
  //   'scope': 'user_read channel_real'
  // });

  // client.get('/channels/:channel/videos', {channel: 'thebaseradio'}, function(err, data) {
  //   if (err) throw err;
  //   var video = data;
  //   var vid = 'http://player.twitch.tv/?channel=thebaseradio';
  //   res.send([{stream: vid}]);
  // });

});

/**
 * GET /api/login
 * user login
 */

router.get('/api/login', function(req, res) {
  res.send({stream: '/api/login'});
});

/**
 * GET /api/viewer/search
 * stream search
 */

router.post('/api/viewer/search', function(req, res, next) {
  var input = req.body.channel;
  var streamLink = 'http://player.twitch.tv/?channel=';
  console.log(input);

  Stream.find({channel: input})
    .exec(function(err, stream, next) {
      if (err) return next(err);

      if (stream.length === 0) {
      } else {
      }
    });
});

module.exports = router;
