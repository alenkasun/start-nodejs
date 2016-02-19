var util = require('util');

var str = util.format("my %s %d %j", "string", 123, {test: "obj"});

console.log(str);