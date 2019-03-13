// 028 Requiring native core modules

// do not specify the path (./) and the file extension (.js) when you are requiring Node's core modules
const util = require('util');
// when you specify ./, you are saying its in the local directory and not a core module

const name = 'Enrique';
const greeting = util.format('Hello %s', name);

util.log(greeting); // similar to console.log but adds a time stamp