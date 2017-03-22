(function (global) {

  var nx = global.nx || require('next-js-core2');
  var getPower = function(inArgs) {
    var pos;
    var max = 0;
    nx.each(inArgs, function (_,arg) {
      pos = arg.toString().split('.')[1] || '';
      max = Math.max(max, pos.length);
    });
    max++;
    return Math.pow(10, max);
  };

  var Decimal = nx.declare('nx.Decimal', {
    statics: {
      add: function () {
        var sum = 0;
        var args = arguments;
        var power = getPower(args);
        nx.each(args, function (_,arg) {
          sum += arg * power;
        });
        return sum / power;
      },
      sub: function (inNum1, inNum2) {
        var power = getPower(arguments);
        var result = inNum1 * power - inNum2 * power;
        return result / power;
      },
      mul: function () {
        var sum = 1;
        var args = arguments;
        var power = getPower(args);
        nx.each(args, function (_,arg) {
          sum *= arg * power;
        });
        return sum / (power * power);
      },
      div: function (inNum1, inNum2) {
        var power = getPower(arguments);
        var result = inNum1 * power / inNum2 * power;
        return result / (power * power);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Decimal;
  }


}(this));
