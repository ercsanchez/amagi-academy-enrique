const http = require('http');

// this creates a server object that emits an event from the client (browser)
http.createServer( (req, res) => {
    // this is the event listener function that gives a response
    res.writeHead( 200, { 'Content-Type': 'text/plain' } );
    res.end('Hello World!\n');
// this connects the server to the port or enables the server to listen to a port for events (i.e. requests)
}).listen(1337, '127.0.0.1');

//localhost or hostname is 127.0.0.1