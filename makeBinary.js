function stringy(size) {
  var answer = [];
  for (var i = 0; i < size; i++){
    if (i % 2 >= 1) {
      answer.push(0);
    } else if (i % 2 === 0) {
      answer.push(1);
    }
  }
  
  return answer.join("");
}
