var http = require("http");

// When the callback fires and our onRequest() function gets triggered,
// two parameters are passed into it: request and response.
// Those are objects, and you can use their methods to handle the details of
// the HTTP request that occured and to respond to the request.

function onRequest(request, response) {
  console.log("Request received");
  // Send an HTTP status 200 and content-type in the HTTP response header
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");

  // Call response.end() to actually finish our response.
  response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started");
