const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
    // this is the response
    res.writeHead( 200, { 'Content-Type': 'text/html' } );
    
    // static html used in response:
    //let html = fs.readFileSync(__dirname + '/index.html');
    //res.end(html);

    // dynamic html templates used in response:
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    let message = 'Hi person!';
    html = html.replace('{Message}', message);
    res.end(html);
    
}).listen(1337, '127.0.0.1');

