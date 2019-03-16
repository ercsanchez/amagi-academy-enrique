// 063 Outputting JSON

const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
    // this is the response
    res.writeHead( 200, { 'Content-Type': 'application/json' } );
    // static html used in response:
    //let html = fs.readFileSync(__dirname + '/index.html');
    //res.end(html);

    // similar to JSON but isn't the format that's actually put into memory and sent to the response stream
    // this will be converted into machine code since this is JS code - you will get the string representation of an object not the contents
    // so we need some way to convert it into actual JSON text format/data before it is sent to the response stream - JSON.stringify
    let obj = {
        firstname: 'John', 
        lastname: 'Doe',
    };
    // shows [object Object] in browser
    //res.end(obj.toString());
   
    // JSON.stringify - serialize into JSON
    // - takes an object and converts its contents into a string, that will be formatted as JSON
    res.end(JSON.stringify(obj));

}).listen(3000, '127.0.0.1', () => console.log(`server listening`) );