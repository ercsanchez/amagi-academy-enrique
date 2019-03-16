// 060 Outputting HTML and Templates

const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
    // this is the response
    res.writeHead( 200, { 'Content-Type': 'text/html' } );
    
    // static html used in response:
    // let html = fs.readFileSync(__dirname + '/index.html');  // console.log will return binary data in the buffer object if no char encoding
    // res.end(html);  // response is a stream so it deals with binary data so no need to specify char encoding

    // dynamic html templates used in response:
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');  // char encoding needs to be specified since you are 
    let message = 'Hi person!';
    html = html.replace('{Message}', message); 
    // char encoding needs to be specified since you are using a string method (.replace) and what is returned by fs.readFileSync is binary data in the buffer
    // you need a string value to be able to use .replace method
   
    res.end(html);  
    
}).listen(3000, '127.0.0.1', () => console.log(`server listening`) );

