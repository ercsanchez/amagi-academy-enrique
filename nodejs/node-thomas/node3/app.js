const fs = require('fs');

// create read stream for output.txt
const readerStream = fs.createReadStream('output.txt');


// create write stream for new.txt
const writerStream = fs.createWriteStream('new.txt');

readerStream.pipe(writerStream);

// EVENT LOOP

//heap??, finally (a promise), generators, async/await & promises, callbacks look up their differences?




