// requires the http module that ships with Node.js and
// makes it accessible through the variable http
var http = require("http");

// call one of the functions the http module offers: createServer
// This function returns an object, this object has a method named listen
// In JavaScript, functions can be passed around like any other value.
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
