// 13 Getting input from user
console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');   

const notes = require('./notes.js');  

// console.log(process.argv);  // process.argv returns an array; 1st element is the path where node is installed, 2nd elem is what file is being run, 3rd elem is the user input after the fileName being run

let command = process.argv[2];  
console.log('Command:', command);
console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Fetching note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recognized');
}

