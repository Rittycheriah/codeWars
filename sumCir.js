function sumCircles() {
  var areas = [];
  for (var i = 0; i < arguments.length; i++)
  {
    var holdsIt = ((arguments[i] / 2) * (arguments[i] / 2)) * Math.PI;
    areas.push(holdsIt);
  }
  
  return "We have this much circle: " + Math.round(areas.reduce(function(a, b) {return a + b}));
  
}
