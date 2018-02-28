module.exports = function check(str, bracketsConfig) {
if (str.length % 2 != 0) {
  return false
}
var stack = [];
for (var i = 0; i < str.length; i++) {
for (var j = 0; j < bracketsConfig.length; j++) {
if (str[i] == bracketsConfig[j][0]) {
  stack.push(str[i]);
  }
if (str[i] == bracketsConfig[j][1]) {
  stack.pop(str[i]);
  }
}
}
if (stack == 0) {return true}
 else {return false}
}
