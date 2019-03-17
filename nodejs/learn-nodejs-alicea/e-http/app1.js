// 059 Let's build a web server in Node.js

const http = require('http');

// .createServer returns a Server object that takes in a callback (turned into an event listener function because it inherits from EventEmitter object of 'events' module), 
// waits for a system event (client/browser request), to be given by http-parser of http module
// Server object will emit the 'request' event and pass req and res objects to listener function
// req - request; res - represents the stream where you can send the response
http.createServer( (req, res) => {
    // this is the event listener function that reads the request and gives a response

    // response starts with the Head
    res.writeHead( 200, { 'Content-Type': 'text/plain' } ); // status Code, http headers (key-value pairs) - keys/names should be enclosed in quotes since some are not valid JS variable names
    // Content-Type is info that the browser needs so that it knows how to interpret the response
    
    // done sending, this is the last thing to be sent in the response
    res.end('Hello World!\n');

// this connects the server app to the port or enables the server to listen to a port for events (i.e. requests)
}).listen(3000, '127.0.0.1', () => console.log(`server listening`) );
// .listen is a property available to the created Server object 

//127.0.0.1 - std. internal IP address of local system (localhost or hostname)
// you can type localhost or the IP add in browser e.g. localhost:1337