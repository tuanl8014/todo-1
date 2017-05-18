var expect = require('chai').expect;
var request = require('request');

describe('Colour code converter API', function() {
  describe('RGB to Hex conversion', function() {
    var url = "http://localhost:3000/rgbToHex?red=0&green=255&blue=255";
    it('should return 200', done => {
      request(url, (err, res, body) => {
        expect(res.statusCode).eq(200);
        done();
      });
    });
    it('should return the colour in hex', done => {
      request(url, (err, res, body) => {
        expect(body).eq('"00ffff"');
        done();
      });
    });
  });

  describe('Hex to RGB conversion', function() {
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";
    it('should return 200', done => {
      request(url, (err, res, body) => {
        expect(res.statusCode).eq(200);
        done();
      });
    });
    it('should return the colour in RGB', done => {
      request(url, (err, res, body) => {
        expect(body).eq('[0,255,0]');
        done();
      });
    });
  });
});
