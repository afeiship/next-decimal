var assert = require('assert');
var nx = require('next-js-core2');
var Decimal=require('../src/next-decimal');
describe('Decimal', function () {

  describe('#mul', function () {
    it('20.01*100=2001', function () {
      var mulResult = Decimal.mul(20.01, 100);
      assert.equal(2001, mulResult);
    });

    it('0.1*0.2 == 0.02', function () {
      var mulResult = Decimal.mul(0.1, 0.2);
      assert.equal(0.02, mulResult);
    });
  });


});
