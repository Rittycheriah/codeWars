var allPrime = function(num){
  var divisibleBy = [];
  var start = 2;

  while (num > 2){
    if (num % start  === 0){
      divisibleBy.push(start);
      num = num / divisor;
    }else{
      start++
    }
  }
  // this returns all the prime nums
  // that are factors of a given #
  return divisibleBy;
}
