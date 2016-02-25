var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    var info;

    if(req.url == '/') {
        fs.readFile('index.html', function (err, info) {
            if(err){
                console.log(err);
                res.statusCode = 500;
                res.end('Error occurred on server back');
                return;
            }
            res.end(info);
        });
    } else if (req.url == '/now') {
        res.end(new Date().toString());
    }

}).listen(1337, '127.0.0.1');