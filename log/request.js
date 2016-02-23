var url = require('url');
var log = require('./log')(module);

module.exports = function (req, res) {
    var urlParsed = url.parse(req.url, true);

    log.info("Got request", req.method, req.url);

    if (req.method == 'GET' && urlParsed.pathname == '/ech' && urlParsed.query.message) {
        var message = urlParsed.query.message;
        log.debug("Echo: " + message);
       return;
    }

    log.error("Unknown URL");

    res.statusCode = 404;
    res.end("Not Found");

};