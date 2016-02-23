var winston = require('winston');

module.exports = function(module){
    return makeLogger(module.filename);
};

function makeLogger(path){

    if (path.match(/require.js$/) ){
        var transpots = [
            new winston.transports.Console({
                timestamp: true,
                colorize: true,
                level: info
            }),

            new winston.transports.File({filename: 'debug.log', level: 'debug'})
        ];

        new winston.transports.File();
    }

}