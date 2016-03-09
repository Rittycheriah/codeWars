var numberToPrice = function(number1) {
  console.log(number1);
  if (number1 > 0) {
    var rounded = (Math.floor(number1 * 100) / 100).toFixed(2);
    var toCommafy = rounded.toString().split(".");
    toCommafy[0] = toCommafy[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var joined = toCommafy.join(".").toString();
    return joined;
  } else if (number1 <= 0) {
    var fixed = number1.toFixed(2);
    var toCommafy = fixed.toString().split(".");
    toCommafy[0] = toCommafy[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return toCommafy.join(".");
  } else {
    return 'undefined';
  }
}
