var http = require('http');

var server = new http.Server(function(req, res){
    res.end('temporary enter into the breakpoint');
}).listen(1337, '127.0.0.1');


setTimeout(function(){
    server.close(function(){
        process.exit();
    });
}, 2500);

setInterval(function(){
    console.log(process.memoryUsage());
}, 1000);

