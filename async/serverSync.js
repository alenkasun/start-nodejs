var http = require('http');
var fs = require('fs');

// 1. Блокирует => используется там, где нет параллелизма
// 2. Работает try ... catch
// 3. Прост и понятен всем )

http.createServer(function(req, res){
    var info;

    if(req.url == '/') {
        try {
            info = fs.readFileSync('index.html');
        } catch (err){
            console.error(err);
            res.statusCode = 500;
            res.end('Error occurred on server back during sync process');
            return;
        }
        res.end(info);
    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }

}).listen(1337, '127.0.0.1');