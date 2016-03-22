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
  var input = req.body.channel;
  var streamLink = 'http://player.twitch.tv/?channel=';

  Stream.search(input, function(err, searchResults) {
    console.log('>>>>>>>>>> input & searchResults', input, searchResults);
    if (err) throw err;

    if (!err) {
      for (var i = 0; i < searchResults.length; i++) {
        if (input === searchResults[i]) {
          console.log('>>>>>>>>>>>>> MATCH', input, searchResults[i]);
        }
      }
    }
  });

});

module.exports = router;
