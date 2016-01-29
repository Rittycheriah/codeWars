function validatePIN (pin) {
  var six = /^\d{6}$/.test(pin);
  var four = /^\d{4}$/.test(pin);
  
  if ( !six && !four) {
    return false;
  } 
  
  return true;
}
