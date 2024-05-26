const http = require('http');

//create a server object:
http
  .createServer(function (req: any, res: any) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080);
