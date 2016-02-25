var http = require('http');

var server = new http.Server(function(req, res){

    process.nextTick(function(){
        req.on('readable', function(){
            res.end('use nextTick');
        });
    });

}).listen(1337, '127.0.0.1');