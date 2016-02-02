var primeNums = function (n){
  var beginDivisor = 2;

  while (n > 2){
    if (n % beginDivisor === 0){
      return false;
    }
    else 
      divisor++;
  }
  return true;
}
