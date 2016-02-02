var fib = function(n){
  var fibStart = [0, 1];
  
  // if the number is 2, it should return 1
  if (n <= 2)
    return 1;

  // if the number is above 2, then
  // we should iterate through until the 
  // current n is reached for the largest fib
  for(var i = 2; i <= n; i++){
    fibo[i] = fibo[i - 1]+fibo[i - 2];
  }

  return fibo[n];
}
