// 028 Requiring native core modules

// no need to specify the path (./) or the file extension (.js) when you are requiring core modules
const util = require('util');
// when you specify ./, you are saying its in the local directory and not a core module

const name = 'Enrique';
const greeting = util.format('Hello %s', name);

util.log(greeting); // similar to console.log but adds a time stamp