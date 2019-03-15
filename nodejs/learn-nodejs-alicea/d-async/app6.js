// 053 Conceptual Aside: Pipes - part 2

// example from lecture 051
const fs = require('fs');

// READABLE STREAM - read data from a file
const readable = fs.createReadStream(__dirname + '/app6-file.txt');
// highWaterMark changes the buffer size in terms of bytes, so example above changes default from 64kb to 32kb

// WRITABLE STREAM - to write data into a file
const writable = fs.createWriteStream(__dirname + '/app6-filecopy.txt');

// no longer needed; replaced by readable.pipe()
// readable.on('data', function(chunk) {  // data is an event
//     console.log(chunk);
//     console.log(chunk.length);
//     // write chunks of data to another file using writable stream
//     writable.write(chunk);
// });

// replaces entire code in readable.on()
readable.pipe(writable);
// readable is source and writable is destination and it sets up readable's event listener 
// to listen for the chunk of data being made available (i.e. 'data' event)


// chaining pipes

// library for working with gzip - a type of file compression algorithm; format: .gz
const zlib = require('zlib');

const compressed = fs.createWriteStream(__dirname + '/app6-file.txt.gzip');

// creates the transform stream that is readable and writable
const gzip = zlib.createGzip();
// every time chunk is sent to it, it compresses that chunk but does not save it to any file
// only gives the corresponding compressed output

// pipe readable stream into compressed stream
readable.pipe(gzip).pipe(compressed);
// .pipe(gzip) returns a transform stream (readable/writable) so it also has a pipe property on it and can be chained
// will read from readable stream and pipe chunks to gzip for compression, and gzip will pipe compressed chunks to .gz file

