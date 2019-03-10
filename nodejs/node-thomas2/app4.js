// read and write steam

const fs = require('fs');

const readerStream = fs.createReadStream('output3.txt');

fs.writeFile('new.txt', '', (err) => {
    console.error(err);
});

const writerStream = fs.createWriteStream('new4.txt');
readerStream.pipe(writerStream);