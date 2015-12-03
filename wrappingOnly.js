function wrapping(l, w, h) {
  var slack = 0; 

  var a1 = l * w; 
  var a2 = w * h; 
  var a3 = h * l;

  if (a1 < a2 && a1 < a3){
    slack = a1;
  } else if (a2 < a3 && a2 < a1){
    slack = a2; 
  } else if (a3 < a2 && a3 < a1){
    slack = a3;
  }

  var solution = (l * w * 2) + (w * h * 2) + (h * l * 2) + slack;

  return solution;
}
