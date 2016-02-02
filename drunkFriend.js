function decode(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
  var codex = alphabet.toLowerCase().split('');
  var revCodex = codex.reverse();
  var words2Decode = str.split('');
  var charPositions = [];
  var finalAns = [];
  
    console.log(words2Decode, 'the words');
    if (typeof str != 'string'){
      return 'Input is not a string';
    } else {
      for (var i = 0; i < words2Decode.length; i++){
        charPositions.push(revCodex.indexOf(words2Decode[i]));
      }
    }

    console.log(charPositions, 'char positions');
    for(var j = 0; j < charPositions.length; j++){
       finalAns.push(alphabet.charAt(charPositions[j]));
    }
    
    console.log(finalAns);
    return finalAns.join('');
} // still working on this one.... caps & spaces returning -1 
