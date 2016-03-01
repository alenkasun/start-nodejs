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

        file.on('error', function () {
           res.statusCode = 500;
           res.end("Server error");
           console.log('close');
        });

        file
            .on('open', function(){
                console.log('open');
            })
            .on('close', function(){  // нормальное завершение
                console.log('close');
            });

        res.on('close', function(){  // сигнал, что соединение было оборвано
            file.destroy();
        });
    };
}