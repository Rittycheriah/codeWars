function createSecretHolder(secret){
  var __secret = secret; 

  return {
    "getSecret" : function() {  
      return __secret;
     }, 
    "setSecret" : function (secret) {
      secret = __secret;
     };
  }
}
