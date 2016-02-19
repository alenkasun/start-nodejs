var util = require('util');

var phrases = {
    "Hello": "Привет",
    "world": "мир"
};

function getPhrase(name) {
    if (!phrases[name]) {
        throw new Error("There is no such phrase as " + name);  // HTTP 500 Internal server error
    }
    return phrases[name];
}

function makePage(url) {
    if(url != 'index.html'){
        throw new Error("There is no such page!");   // HTTP 404 Not found
    }
    return util.format("%s, %s! ", getPhrase("Hello"), getPhrase("world"));
}

    var page = makePage('index.html');
    console.log(page);