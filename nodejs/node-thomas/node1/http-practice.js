// MODULES

// 4 things that make-up node: modules, events, streams, async functions

//core modules:  http, net, dns, os, fs, and many more

//http.createSecureServer more useful

//useful modules: false, http, url, util (not usually) - for debugging, querystring

const http = require('http');
const hostname = 'localhost';  // local host represents your computer's browser but in production, its the URL
const port = 8000;

const server = http.createServer( (req, res) => {
    console.log(req.headers);
    res.writeHead( 200, {'Content-Type':'text/html'} );
    // res.writeHead( 200 );
    res.write('Hello Mr. Enrique<br><div>Hello</div>');
    res.end();
    console.log(res.headers);
});

server.listen(port, hostname, () => {
    console.log(`Check http://${hostname}:${port}/`);
});
