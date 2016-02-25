var fs = require('fs');

fs.readFile(__filename, function(err,data){
    if(err){
        console.log(err);
    } else {
        console.log(data[0]);
        console.log(data.length);
        console.log(__filename);
    }
});