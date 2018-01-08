var bc = require('./BasicCard');
var cc = require('./ClozeCard');

var b = new bc('a','b');
console.log(b);

var c = new cc('George Washington was the first president of the United States.','George Washington');
console.log(c);