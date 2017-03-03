var assert = require('assert');
var nx = require('next-js-core2');
var Decimal = require('../src/Decimal');
describe('Decimal', function () {

  describe('#mul', function () {
    it('20.01*100=2001', function () {
      var mulResult = Decimal.mul(20.01, 100);
      assert.equal(2001, mulResult);
    });
  });

});
