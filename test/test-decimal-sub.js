var assert = require('assert');
var nx = require('next-js-core');
var Decimal = require('../src/Decimal');
describe('Decimal', function () {

  describe('#sub', function () {
    it('0.3-0.1=0.2', function () {
      var subResult = Decimal.sub(0.3, 0.1);
      assert.equal(0.2, subResult);
    });
    it('3.13-20.01=-16.88', function () {
      var subResult = Decimal.sub(3.13, 20.01);
      assert.equal(-16.88, subResult);
    });
  });

});
