var http = require("http");
const PORT = process.env.VCAP_APP_PORT || 3000;
http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   console.log('Recieved request...');
   response.writeHead(200 , {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World" asdf
   response.end('Hello World 2\n');
}).listen(PORT);

// Console will print the message
console.log('Server running at port:'+PORT);
