var User = require('./user'),
    db = require('./db');

function run() {
    var user1 = new User("Pete");
    var user2 = new User("Jastine");

    user2.hello(user1);
}

if(module.parent){
    exports.run = run;
} else {
    run();
}