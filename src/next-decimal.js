(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  // next package:
  require('next-float-power');
  require('next-max');

  // private function:
  function getMaxPower(inArgs) {
    var result = nx.map(inArgs, function (_, arg) {
      return nx.floatPower(arg) * 10;
    });
    return nx.max(result);
  }

  var NxDecimal = nx.declare('nx.Decimal', {
    statics: {
      add: function () {
        var sum = 0;
        var args = arguments;
        var power = getMaxPower(args);
        nx.each(args, function (_, arg) {
          sum += arg * power;
        });
        return sum / power;
      },
      sub: function (inNum1, inNum2) {
        var power = getMaxPower(arguments);
        var result = inNum1 * power - inNum2 * power;
        return result / power;
      },
      mul: function () {
        var sum = 1;
        var args = arguments;
        var power = getMaxPower(args);
        nx.each(args, function (_, arg) {
          sum *= arg * power;
        });
        return sum / (power * power);
      },
      div: function (inNum1, inNum2) {
        var power = getMaxPower(arguments);
        var result = inNum1 * power / inNum2 * power;
        return result / (power * power);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDecimal;
  }

}());
