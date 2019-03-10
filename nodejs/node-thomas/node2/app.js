console.log('Starting app.js');

// // CALLBACK FUNCTIONS

// const dns = require('dns');
// dns.resolve4('google.com', (err, addresses) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('addresses:' + JSON.stringify(addresses));
//     }
// });

// //ERROR-FIRST CALLBACKS
const fs = require('fs');

// fs.readFile('./foo.txt', (err, data) => {
//     if (err) {
//         console.error(err.message);
//         throw err;
//     }
//     console.log(data.toString('utf8'));
    
// });

// console.log('hello');

// // ASYNCHRONOUS FUNCTIONS
// // same as previous examples

// // writeFileSync readFileSync - synchronous functions


// // File system directories

const text = 'this is text';

fs.mkdir('folder', () => {
    fs.writeFile('file.txt', text, (err) => {
        fs.readFile('file.txt', (err, data) => {
            console.log(data.toString('utf8'));
            fs.unlink('./file.txt', (err) => {
                console.log('path/file.txt was deleted');
                fs.rmdir('./folder', (err) => {
                    console.log('folder was deleted');
                });
            });
        });
    });
});

// //delete file and folder

// // OS
// // const os = require('os');
// // console.log(`CPU Uptiime: ${os.uptime()}`);
// // console.log(`Avg CPU Load at 1/5/15 mins: ${os.loadavg()}`);
// // console.log(`Info about each CPU: ${os.cpus()}`);
// // console.log(JSON.stringify(os.cpus()));

// // BUFFER OBJECTS 
// - exists in every back-end language
// let buffer = new Buffer(10);
// console.log(buffer);

// let buffer2 = new Buffer("I'm a string", 'utf-8');
// console.log(buffer2);
// buffer2.write('Hello', 'utf-8');
// console.log(buffer2);

// DATA STREAMS - READABLE, WRITEABLE, DUPLEX, TRANSFORM - DIFFERENCE IS IN THE STATE CHANGES AND TRANSACTION ITSELF

// DATA END ERROR FINISH

//writerStream
// const fs = require('fs');
let data = 'hello';
const writerStream = fs.createWriteStream(
    'output.txt'
);



writerStream.write(data, 'UTF8');
writerStream.end();

// finish 
writerStream.on('finish', () => {
    console.log('Finished');
});

// error
writerStream.on('error', () => {
    console.log('This is an error');
});

let data2 = 'welcome';

const readerStream = fs.createReadStream('output.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data2', (piece) => {
    data2 += piece;
})

readerStream.on('end', () => {
    console.log(data2);
})

//error

readerStream.on('error', () => {
    console.log("This is an error.");
})