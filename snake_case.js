function toUnderscore(string) {
  if (typeof string === 'number') {
    return string;
  } else {
    var insert_underscore = string.split(/(?=[A-Z])/).join("_"); 
    var all2Lower = insert_underscore.toLowerCase();
    return all2Lower;
  }
}
