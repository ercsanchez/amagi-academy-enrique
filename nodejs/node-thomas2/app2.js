// STREAMS

// types: read, write, read/write, 

// streams are event emitters and throw events
// event types: data, end, error, finish

// write stream
const fs = require('fs');

let data = 'I am writing something.';

const writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end();

// handle finish event
writerStream.on('finish', () => {
    console.log('done writing');
});

// handle error event
writerStream.on('error', (err) => {
    console.error(err.stack);
});

