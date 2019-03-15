// 051 Streams

const fs = require('fs');

// READABLE STREAM - read data from a file
// const readable = fs.createReadStream(__dirname + '/app5-file.txt', {encoding: 'utf8'});
// // or fs.createReadStream(__dirname + '/app5-file.txt', 'utf8');

// WRITABLE STREAM - to write data into a file
const writable = fs.createWriteStream(__dirname + '/app5-filecopy.txt', {encoding: 'utf8', highWaterMark: 64 * 1024 } );
// when it receives a chunk, it will simply write it to the file

// event listener
// readable.on('data', function(chunk) {  // data is an event
//     console.log(chunk);
//     writable.write(chunk);
// });
// stream will fill a buffer with contents
// if text file is bigger than the buffer, then you get chunks (equal to buffer size) of the data at a time 
// each time a buffer is filled, it will emit the data event, pass the contents of the buffer to the listener functions 
// and run them, repeating this cycle until the entire file has been read

// to output buffer content (hexadecimal notation) and to see the number of buffer objects or chunks processed, remove char encoding 
const readable2 = fs.createReadStream(__dirname + '/app5-file.txt', { highWaterMark: 32 * 1024 } );
// highWaterMark changes the buffer size in terms of bytes, so example above changes default from 64kb to 32kb

readable2.on('data', function(chunk) {  // data is an event
    // show buffer content in hexadecimal notation
    console.log(chunk);
    // show the size of the contents in each buffer in terms of bytes
    console.log(chunk.length);
    // write chunks of data to another file using writable stream
    writable.write(chunk);
});
// you will see 3 chunks/buffer objects since our file size is >180kb and default buffer size for file streams is only 64kb
