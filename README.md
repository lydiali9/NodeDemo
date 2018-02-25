### callbacks
```bash
asyncFunction1(inputParam, function(err, results1) {
    asyncFunction2(results1, function(err, results2) {
        asyncFunction3(results2, function(err, results3) {
            asyncFunction4(results3, function(err, results4) {
                // and so on
            });
        });
    });
});
```

### Variables are marked for export via "module.exports"

#### one.js
```bash
var count = 2;

var doIt = function(i, callback) {
    // do something, invoke callback
}

module.exports.doIt = doIt;
module.exports.foo = 'bar';
```

#### two.js
```bash
var one = require('./one');

one.doIt(23, function(err, resut) {
    console.log(result);
});

console.log(one.foo);
```

### Non-blocking doesn`t always mean callbacks

#### callbacks
```bash
getThem(param, function(err, items) {
    
});
```

#### Events
```bash
var results = getThem(param);

results.on('item', function(i){
    // do something with this one item
});

results.on('done', function(){
    // No more items
});

results.on('error', function(){
    // React to error
});
```

> 

### Node`s 'EventEmitter' class

#### The publisher
```bash
emitter.emit(event, [args]);
```

#### The subscriber
```bash
emitter.on(event, listener);
```

> The "Event" can be any string
> An event can be emitted with zero or more arguments
> The set of events and their arguments constitute a "interface" exposed to the subscriber by the publisher(emmitter).

#### Two common patterns for EventEmitters
> As a return value from a function call (see earlier example)
> Object that extend EventEmitter to emit events themselves


