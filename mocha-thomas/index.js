const express = require('express');
const app = express();

// route

app.get('/', (req, res) => {
    //res.status(200);
    res.send('Hello World');
});


app.listen(3000, () => {
    console.log('server is listening');
});
