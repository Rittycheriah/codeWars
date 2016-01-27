function alphanumeric(string){
  var req = /([a-zA-Z0-9])/.test(string);
  var white = /(?=.*[\s+_&!)(\t+\n+\r+])/.test(string);
  
  if (req === true && white === false) {
    return true;
  } else if (white === true) {
    return false;
  } else {
    return false;
  }
}
