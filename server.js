var user = require('./user');

function run() {
    var user1 = new user.User("Pete");
    var user2 = new user.User("Jastine");

    user2.hello(user1);
}

if(module.parent){
    exports.run = run;
} else {
    run();
}