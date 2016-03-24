'use strict';

var express = require('express');
var router = express.Router();
var Stream = require('../models/stream');
var TwitchClient = require('node-twitch-api');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Main'
  });
});

/**
 * GET /api/viewer
 * viewer with up to 4 streams
 */

router.get('/api/viewer', function(req, res, next) {
  var streamLink = 'http://player.twitch.tv/?channel=';

  Stream.find()
    .exec(function(err, streams) {
      if (err) return next(err);

      if (streams.length === 0) {
        res.send([{
          stream: streamLink + 'twitch'
        }]);
      } else {
        var streamUrls = streams.map(function(stream) {
          return {
            stream: streamLink + stream.channel
          };
        });
        res.send(streamUrls);
      }
    });

});

/**
 * GET /api/login
 * user login
 */

router.get('/api/login', function(req, res) {
  res.send({
    stream: '/api/login'
  });
});

/**
 * GET /api/viewer/search
 * stream search
 */

router.post('/api/viewer/search', function(req, res, next) {
  var input = String(req.body.channel);
  var streamLink = 'http://player.twitch.tv/?channel=';
  var channel = {
    channel: input
  };

  var client = new TwitchClient({
    'scope': 'user_read channel_read'
  });

  client.get('/streams/:channel', channel, function(err, data) {
    if (err) return err;

    if (data.stream == null) {
      console.log('No Stream Available.');
    } else if (data.stream !== null) {

      var newStream = new Stream({
        channel: input
      });

      newStream.save(function(err) {
        if (err) return next(err);

        if (!err) {
          Stream.find()
            .exec(function(err, streams) {
              if (err) return next(err);

              var streamUrls = streams.map(function(stream) {
                return {
                  stream: streamLink + stream.channel
                };
              });
              console.log('streamUrls', streamUrls);
              res.send(streamUrls);
            });
        }
      });

      // Stream.search(input, function(err, data) {
      //   console.log('Search data for:', input, data);
      // });

    }

  });

});

module.exports = router;
