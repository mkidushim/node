var http = require('http');
// var port = 1337;
var myMod = require('./my_module');
myMod.foo();
myMod.bar();
var makeRequest = function(message){
	var options = {
		host: 'localhost', port: 8080, path: '/', method: 'POST'
	};
	var request = http.request(options, function(response){
		response.on('data', function(data){
			console.log(data);
		});
	});
	request.write(message);
	request.end();
};
makeRequest('Here is looking at Boobies!');
module.exports = makeRequest;