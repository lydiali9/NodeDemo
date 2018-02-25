var os = require('os');

var toMb = function(f) {
    return(Math.round((f/1024/1024) * 100)/100);
}

console.log('Host: ' + os.hostname());
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmen()) + ' Mb free');

/*
// Variables are marked for export via "module.exports"

// one.js
var count = 2;

var doIt = function(i, callback) {
    // do something, invoke callback
}

module.exports.doIt = doIt;
module.exports.foo = 'bar';

// two.js
var one = require('./one');

one.doIt(23, function(err, resut) {
    console.log(result);
});

console.log(one.foo);
 */