
obfuscate = function(email) {
  var part1 = email.replace(/\./g," [dot] ");
  var part2 = part1.replace(/@/g, " [at] ");
  return part2;
}
