var fs = require('fs');

// fs.ReadStream наследует от stream.Readable
var stream = new fs.ReadStream(__filename, {encoding: 'utf-8'});

stream.on('readable', function(){
   var data = stream.read();
    console.log(data.length);  // длина прочитанного фрагмента
});

stream.on('end', function () {
    console.log("THE END");
});