var express = require('express');
var router = express.Router();
var Gpio = require('onoff').Gpio;
var cors = require('cors');
router.use(cors());
/* GET home page. */
var LED = new Gpio(4, 'out');
router.get('/armenian', function(req, res, next) {
  res.send(true);
});
router.post('/on', function(res,req){
  LED.writeSync(1);
  res.send('on');
});
router.post('/off', function(res,req){
  LED.writeSync(0);
  res.sendStatus(200);
});

module.exports = router;
