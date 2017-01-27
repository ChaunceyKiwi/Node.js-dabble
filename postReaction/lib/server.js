var http = require('http');

http.createServer(function (request, response) {
var body = [];

	request.on('data', function (chunk) {
	body.push(chunk); //push the info gotten from client to the body
	});

	request.on('end', function () {
	body = Buffer.concat(body); //print the content of body
	console.log(body.toString());

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Your request is "+body.toString()+"\n");


});


}).listen(1337);

console.log("Starting web server at 1337 port");
