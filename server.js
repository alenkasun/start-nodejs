var user = require('./user');

var user1 = new user.User("Pete");
var user2 = new user.User("Jastine");

user2.hello(user1);