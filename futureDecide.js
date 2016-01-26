var yourFutureCareer = function() {
	var career = Math.random();
  
  if (career <= 0.32) {
    return "FrontEnd Developer";
  } else if (career >= 0.65) {
    return "BackEnd Developer";
  } else if (career <= 0.32 && career >= 0.65){
    return 'Full-Stack Developer';
  } else {
    return 'Full-Stack Developer';
  }
};
