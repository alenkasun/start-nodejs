function Request() {
    var self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function(data){
        console.log(data);
    };

    this.onError = function() {
        self.send("sorry, but we have a problem");
    };

}

setInterval(function(){
    var request = new Request();
    console.log(process.memoryUsage().heapUsed);
}, 200);
