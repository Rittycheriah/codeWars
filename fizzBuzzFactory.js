
n fizzBuzzFactory (arr){
  return function(num) {
    
      var result = "";
        
	  arr.forEach(function(currentPair) {
	       if ( num % currentPair[0] === 0)
	            {
		           result = currentPair[1];
			        }
				  });
				    
				      if (result === "")
				        {
					    result = num.toString();
					      }
					        
						  return result;
						    }
						    }
