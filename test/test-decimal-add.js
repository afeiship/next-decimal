var assert = require('assert');
var nx = require('next-js-core');
var Decimal=require('../src/Decimal');
describe('Decimal', function () {

  describe('#add', function () {
    it('0.1+0.2=0.3', function () {
      var addResult = Decimal.add(0.1, 0.2);
      assert.equal(0.3, addResult);
    });

    it('0.3+0.6=0.9', function () {
      var addResult = Decimal.add(0.3, 0.6);
      assert.equal(0.9, addResult);
    });


    it('1.21+0.2=1.41', function () {
      var addResult = Decimal.add(1.21, 0.2);
      assert.equal(1.41, addResult);
    });

    it('0.1+0.2+0.3=0.6', function () {
      var addResult = Decimal.add(0.1, 0.2, 0.3);
      assert.equal(0.6, addResult);
    });
  });

});
