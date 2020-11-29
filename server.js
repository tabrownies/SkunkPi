const express = require('express');
const app = express()
const Gpio = require('onoff').Gpio;
const cors = require('cors');
app.use(cors());
/* GET home page. */
const LED = new Gpio(4, 'out');
app.get('/armenian', function(req, res, next) {
  res.send(true);
});
app.post('/on', function(res,req){
  LED.writeSync(1);
  res.send('on');
});
app.post('/off', function(res,req){
  LED.writeSync(0);
  res.sendStatus(200);
});

app.listen(3000, ()=>console.log("Listening on port 3000!"));
