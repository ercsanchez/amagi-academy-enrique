// 064 Routing

// in previous examples, any path that i go to, will give me the same data, since we aren't even looking at the URL in the request
const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
    
    // routing
    if (req.url === '/') {
        fs.createReadStream (__dirname + '/index.html').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead( 200, { 'Content-Type': 'application/json' } );
        let obj = {
            firstname: 'John', 
            lastname: 'Doe',
        };
        // serialize into JSON
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(3000, '127.0.0.1', () => console.log(`server listening`) );