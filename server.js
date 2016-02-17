var User = require('./user');

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