var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    var info;

    if(req.url == '/') {
        fs.readFile('index.html', function (err, info) {
            console.log(err);
            res.write(err.code);
            res.end(info);
        });
    } else if (req.url == '/now') {
        res.end(new Date().toString());
    }

}).listen(1337, '127.0.0.1');