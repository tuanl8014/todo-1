var expect = require('chai').expect;
var converter = require('../app/converter');

describe('Color code converter', function () {
  describe('RGB to Hex conversion', function() {
    it('converts the basic colours', function() {
      var redHex = converter.rgbToHex(255, 0, 0);
      var greenHex = converter.rgbToHex(0, 255, 0);
      var blueHex = converter.rgbToHex(0, 0, 255);

      expect(redHex).eq('ff0000');
      expect(greenHex).eq('00ff00');
      expect(blueHex).eq('0000ff');
    });
  });

  describe('Hex to RGB conversion', function() {
    it('converts the basic colours', function() {
      var red = converter.hexToRgb('ff0000');
      var green = converter.hexToRgb('00ff00');
      var blue = converter.hexToRgb('0000ff');

      expect(red).deep.eq([255, 0, 0]);
      expect(green).deep.eq([0, 255, 0]);
      expect(blue).deep.eq([0, 0, 255]);
    });
  });
})