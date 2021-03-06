// Demo of the simplest usage of EE
// arguments pass by chain
// handlers perform in the written order

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function(request){
    request.approved = true;
});

server.on('request', function(request){
    console.log(request);
});

server.emit('request', {from: "Client"});

server.emit('request', {from: "Client again"});


server.on('error', function(){});

server.emit('error', new Error('server mistake'));