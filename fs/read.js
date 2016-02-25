var fs = require('fs');

fs.readFile(__filename, function(err,data){
    if(err){
        console.log(err);
    } else {
        console.log(__filename);
        console.log(data)
    }
});