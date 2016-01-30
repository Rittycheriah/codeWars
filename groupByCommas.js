function groupByCommas(n) {
  var regEx = /(\d+)(\d{3})/;
  var stringify = n.toString();
  
  if (n.toString().length <= 3) {
    return n.toString();
  } else {
   while (regEx.test(n)) {
      stringify = stringify.replace(regEx, '$1' + ',' + '$2');
      return stringify;
   }
  }
  
};
