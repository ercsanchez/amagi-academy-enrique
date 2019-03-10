const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
    // this is the response
    res.writeHead( 200, { 'Content-Type': 'application/json' } );
    // static html used in response:
    //let html = fs.readFileSync(__dirname + '/index.html');
    //res.end(html);

    let obj = {
        firstname: 'John', 
        lastname: 'Doe',
    };
    // shows [object Object] in browser
    //res.end(obj.toString());
   
    // serialize into JSON
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');
