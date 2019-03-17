// 075 Static files and middleware

// a function that returns a regular function (app)
const express = require('express');

// a function that has the req and res properties on it
const app = express();

// setting default values of ENVIRONMENT VARIABLES
const port =  process.env.PORT || 3000;

// mapping routes and http verbs to functions (listener functions)

// middleware - between the request and response; filters the response and gives the appropriate response (e.g. sending required static files for the homepage)

// first match the routes with the public folder (on your computer or web server) holding the static files or assets

// remember that browser references static files using the folder structure, using URL/folder-name/styles.css in the link tag in an html document
// browser doesn't see folder structure of your app in your computer or server; it only understands the context of the req and res
// /assets could be any name you want because you make the link to the folder using app.use
app.use('/assets', express.static(__dirname + '/public'));
// app.use appends the endpoint '/assets' to the homepage/root URL and links that endpoint to the public folder so any file-name after /assets/ will be searched in the public folder
// any file in public folder will be sent as a response by referencing /assets/file-name-in-public-folder
// app.use streams the file in the __dirname/public folder as a response whenever any request specifies '/assets/file-name-in-public-folder'

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);

    // call next middleware - needed if you code your own callback functions since built-in callback functions like 
    // express.static automatically call the nexts middleware so it doesn't need one
    // without next() in your custom callback in the 2nd app.use, none of the app.get callbacks will execute
    // only app.use can use next(); app.get, app.post, etc. don't need the next() function because they are considered as one middleware component and usually coded after app.use
    next();
    // app.get - is also middleware, if you think about it, because you are catching the request and doing something before a 
    // response is set (something in between request and response layer), that is why you need to call next() function
});

// homepage endpoint - send html

// client will first request for the webpage, client will see the html and the href on the link tag referencing a CSS file, 
// and generate a 2nd request for URL/assets/style.css the request will be handled by Node in the middleware and 
// when middleware sees /assets, it will get the file referenced in /assets/file-name from the public folder
// and send it as a response
// '/' - root URL or homepage where server is listening
app.get('/', function (req, res) {
    res.send(`
        <html>
            <head>
                <link href=/assets/style.css type=text/css rel=stylesheet />
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>
    `);
});
// you need to specify /assets/style.css in the href of the link tag because this 
// is how you reference static files on the webserver when coding link tags in html for your webpage
// normally, href in link tags are rootURL/any-folder-name/styles.css but you only need to specify the endpoint 
// used in app.use middleware and not the whole URL because '/' before assets means homepage/root URL (being listened to by the server) 
// if no '/' before assets, it will append '/assets' to whatever route is specified by the request e.g. 'rootURL/person/assets'

// matching patterns
// pattern: /:id tells express that id is a variable 
app.get('/person/:id', function (req, res) {
    // params is a property (object) of the req object; id is a property of params object
    res.send('<html><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

// route api endpoint - send JS object and output it as JSON on the client
app.get('/api', (req, res) => {
    res.json( {firstName: 'Enrique', lastName: 'Sanchez'} );
});

app.listen(port, () => console.log(`server listening`) );