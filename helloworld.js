var http = require('http');

var server = http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World app for AWS');
});

server.listen(8000);

console.log('NodeJS server running'); 
