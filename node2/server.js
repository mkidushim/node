var port = 8080;
var express = require('./config/express');
var app = express();
app.listen(port);
module.exports = app;
console.log('Server running at http://localhost:' + port);