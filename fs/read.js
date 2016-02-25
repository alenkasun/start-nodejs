var fs = require('fs');

fs.readFile("bla", function(err,data){
    if(err){
        if(err.code == 'ENOENT'){
            console.error(err.message);
        } else {
            console.error(err);
        }
    } else {
        console.log(data[0]);
        console.log(data.length);
        console.log(__filename);
        console.log(data.toString());
    }
});