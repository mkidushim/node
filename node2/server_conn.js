var port = 8080;
var connect = require('connect');
var app = connect();
var logger = function(req, res, next) {
    console.log(req.method, req.url);
    next();
};
var makeRequest = require('./make_request');
makeRequest("you are an idiot");
var howdyWorld= function(req, res, next) {
    res.setHeader(200);
    res.end('Howdy World');
};

app.use(logger);


app.listen(port);
console.log('Server running at http://localhost:' + port);