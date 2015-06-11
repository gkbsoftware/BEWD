var express = require('express');
var router = express.Router();

var messages = [
  { name: 'paul', text: 'test' }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ messages: messages });
});

router.post('/', function(req, res, next) {
  var message = req.body;
  message.timestamp = Date.now();
  messages.push(message);
  res.send({ messages: messages })
});

module.exports = router;
