var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var ROOT = __dirname;

http.createServer(function(req, res){

    if (!checkAccess(req)) {
        res.statusCode = 403;
        res.end("Tell me the secret to access");
        return;
    }
    sendFileSafe(url.parse(req.url).pathname, res);

}).listen(1337, '127.0.0.1');

function checkAccess(req){
    return url.parse(req.url, true).query.secret == 'o_O';
}

function sendFileSafe(filePath, res){
    try {
        filePath = decodeURIComponent(filePath);
    } catch(e) {
        res.statusCode = 400;
        res.end("Bad Request");
        return;
    }

// проверка нулевого байта (злонамерено поставленного,
// некоторые функции NodeJS будут некорректно работать)
    if (~filePath.indexOf('\O')) {
        res.statusCode = 400;
        res.end("Bad Request");
        return;
    }

// join - объединяет пути
// normalize - убирает некорректные символы типа . или .. или // или ///
// /public/deep/nodejs.jpg -> /home/oshe/job/proj/nodeJS/start-nodejs/safe_path/public/deep/nodejs.jpg
    filePath = path.normalize(path.join(ROOT, filePath));

    if (filePath.indexOf(ROOT) != 0) {
        res.statusCode = 404;
        res.end("File not found");
        return;
    }

    fs.stat(filePath, function(err, stats) {
        if (err || !stats.isFile()) {
            res.statusCode = 404;
            res.end("File not found");
            return;
        }
    });

    sendFile(filePath, res);
}

function sendFile(filePath, res){
    fs.readFile(filePath, function(err, content){
        if (err) throw err;
     // determ file's type via mime for forming correct headers:
     // for example: text/html for html-file, image/jpeg for img-file
        var mime = require('mime').lookup(filePath);  // npm install mime
        res.setHeader('Content-Type', mime + "; charset=utf-8");
        res.end(content);
    });
}