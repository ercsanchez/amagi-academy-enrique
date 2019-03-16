// 061 Streams and performance

const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
    // this is the response
    res.writeHead( 200, { 'Content-Type': 'text/html' } );
    
    // static html:
    //let html = fs.readFileSync(__dirname + '/index.html');
    // res.end(html)

    // dynamic template:
    //let html = fs.readFileSync(__dirname + '/index.html', 'utf8');  
    // let message = 'Hi person!';
    // html = html.replace('{Message}', message);
    // res.end(html);

    // stream:
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    //custom stream to modify data as it is being sent to the client - llok for 3rd party modules that do this
    
}).listen(3000, '127.0.0.1', () => console.log(`server listening`) );