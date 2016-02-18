var db = require('../db'),
    log = require('../logger')(module);

db.connect();

function User(name){
    this.name = name;
};

User.prototype.hello = function(who){
    log(db.getPhrase("Hello") + ", " + who.name);
};



module.exports = User;