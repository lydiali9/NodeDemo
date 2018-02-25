var mathfun = require('./mathfun');

var processResults = function(err, results, time) {
    if(err) {
        console.log("Error: " + err.message);
    } else {
        console.log("The results are: " + results + '(' + time + ' ms)');
    }
};

for(var i = 0 ; i < 10; i++) {
    console.log("calling 'evenDoubler' with paramter '" + i + "'");
    mathfun.evenDoubler(i, processResults);
}

console.log(mathfun.foo);
console.log(mathfun.maxTime);