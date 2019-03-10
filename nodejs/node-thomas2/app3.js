// read stream

const fs = require('fs');

let data = '';

const readerStream = fs.createReadStream('output3.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', (piece) => {
    data += piece;
});

// handle end and error stream
readerStream.on('end', () => {
    console.log(data);
});

// handle error event
readerStream.on('error', (err) => {
    console.error(err.stack);
});
