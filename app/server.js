let express = require('express');
let app = express();
let converter = require('./converter');
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'));
});

app.get('/rgbToHex', (req, res) => {
  let red = parseInt(req.query.red, 10);
  let green = parseInt(req.query.green, 10);
  let blue = parseInt(req.query.blue, 10);

  let hex = converter.rgbToHex(red, green, blue);
  res.send(JSON.stringify(hex));
});

app.get('/hexToRgb', (req, res) => {
  let hex = req.query.hex;
  let rgb = converter.hexToRgb(hex);
  res.send(JSON.stringify(rgb));
});

module.exports = app;