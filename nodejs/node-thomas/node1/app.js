// NODE FUNDAMENTALS

// __dirname

console.log(__dirname);  // directory of the current project
console.log(__filename); // file name of the file (i.e. app.js) being executed by node (directory/path of file being specified by node in the terminal i.e. node app.js)
setTimeout( function() {
    console.log('Ready, Set, Go!');
}, 3000);

console.log(process.cwd());
console.log(process.cpuUsage());

// cwd current working directory different to directory name

//- usually just used once in the program at the start
// process.argv

// process.argv - records what you input in the command line; useful for getting passwords of users when they log in
console.log(process.argv);

// process.env
// process.pid
// upTime
// memoryUsage
// kill
// exit



