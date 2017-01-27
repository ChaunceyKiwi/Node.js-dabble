var querystring = require("querystring");
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test');



function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  console.log(postData);
  console.log("YouPostData: "+ postData);
  response.write("You've sent the text: "+"haha");

   var Jason = new Peo();
   Jason.name = postData;
   Jason.age = postData;
   Jason.hobby = postData;
   Jason.job = postData;

   Jason.save(function (err) {if (err) console.log('Error!');});
   console.log("Insert finished");
   response.end();
}


exports.start = start;
exports.upload = upload;
