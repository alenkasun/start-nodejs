var http = require('http');
var fs = require('fs');

// 1. Не блокирует
// 2. Не работает try ... catch => callback(err)
// 3. Сложнее (есть способы упростить себе жизнь)

http.createServer(function(req, res){
    var info;

    if(req.url == '/') {
        fs.readFile('index.html', function (err, info) {
            if(err){
                console.log(err);
                res.statusCode = 500;
                res.end('Error occurred on server back during async process');
                return;
            }
            res.end(info);
        });
    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }

}).listen(1337, '127.0.0.1');