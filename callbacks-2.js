var maxTime = 1000;

var evenDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random() * (maxTime + 1));
    if(v%2) {
        setTimeout(function() {
            callback(new Error("odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v * 2, waitTime);
        }, waitTime);
    }
};

var handleResults = function(err, results, time) {
    if(err) {
        console.log("Error: " + err.message);
    } else {
        console.log("The results are: " + results + '(' + time + ' ms)');
    }
};

evenDoubler(2, handleResults);


/*
asyncFunction1(inputParam, function(err, results1) {
    asyncFunction2(results1, function(err, results2) {
        asyncFunction3(results2, function(err, results3) {
            asyncFunction4(results3, function(err, results4) {
                // and so on
            });
        });
    });
});

 */
