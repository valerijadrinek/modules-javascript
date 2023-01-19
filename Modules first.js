//Modules, first lection

//CommonJS, AMD
var module1 = require('module1');

module1.exports = {
    fight: fight
}

//first solution = creating IIFE functions

(function() {
    var harry = "potter harry";
    var voldemort = "hi who is none";
                                      //those variables don't polute global scope
    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2 ? `${char1} win` : `${char2} win`;
    }
    
    console.log(fight(harry, voldemort));
})();

//if we want other functions to share fight metod than;
var fightModule = (function() {
    var harry = "potter harry";
    var voldemort = "hi who is none";
                                      //we grab our IIFE and turn it into reusable variable
    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2 ? `${char1} win` : `${char2} win`;
    }
    return {
        fight: fight   //here we define everything that we wont to be available outside the variable
    };
})();

//now we can do this
fightModule.fight('caren', 'damian');