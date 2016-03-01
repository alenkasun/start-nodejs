var http = require('http');
var fs = require('fs');

new http.createServer(function(req, res){
    if (req.url == '/pipe.js') {
        var file = new fs.ReadStream(__filename);
        sendFile(file, res);
    }
}).listen(3000, '127.0.0.1');

function sendFile(file, res) {
    file.on('readable', write);

    function write(){
        file.pipe(res);             // output into user
        file.pipe(process.stdout);  // output into console
    };
}