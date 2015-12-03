function stairSolution(parens) {
  var arr = parens.split('');
  var answer = 0;  

  for (var i = 0; i < parens.length; i++){
    if(parens[i] === "("){
      answer = answer + 1;
    } else if (parens[i] === ")"){
      answer = answer - 1
    }
  }
				  
  return answer;
} 
