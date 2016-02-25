var fs = require('fs');

fs.open(__filename, "r", function(err, file){
   console.log("IO");
});

// perform after I/O operation (fs.open)
setImmediate(function(){
   console.log("immediate");
});

// perform before I/O operation (fs.open)
process.nextTick(function () {
   console.log("nextTick") ;
});

// Output sequence: nextTick, IO, immediate


