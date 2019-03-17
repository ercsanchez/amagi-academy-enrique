// 077 Querystring and post parameters

const express = require('express');
const fs = require('fs');

const app = express();

const port =  process.env.PORT || 3000;

// mapping routes and http verbs to functions (listener functions)

// middleware 
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});

    // let message = 'Hi person!';
    // html = html.replace('{Message}', message); 

// homepage or root
app.get('/', function (req, res) {
    // res.send(`
    //     <html>
    //         <head>
    //             <link href=/assets/style.css type=text/css rel=stylesheet />
    //         <body>
    //             <h1>Hello World!</h1>
    //         </body>
    //     </html>
    // `);
    // res.send('/index.html');
    res.sendFile('/assets/index.html');
    console.log('hello');
});

app.set()

app.get('/person/:id', function (req, res) {
    // params is a property (object) of the req object; id is a property of params object
    res.send(`
        <html><body><h1>Person: ${req.params.id} </h1></body></html>`);
});

// route api endpoint - send JS object and output it as JSON on the client
app.get('/api', (req, res) => {
    res.json( {firstName: 'Enrique', lastName: 'Sanchez'} );
});

app.listen(port, () => console.log(`server listening`) );