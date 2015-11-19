function squareSum(numbers){
  var squares = [];
  var sum = 0; 
  var holdsIt;
  
  for (var i = 0; i < numbers.length; i++)
  {
    holdsIt = numbers[i] * numbers[i];
    squares.push(holdsIt);
  }
  
  for (var j = 0; j < squares.length; j++)
  {
    sum = sum + squares[j];
  }
  
  return sum; 
};
