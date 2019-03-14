// 047 Buffers

// create a new buffer
const buffer = new Buffer('Hello', 'utf8');
// take 'hello' string, convert it to unicode char set, and then convert that into binary data using UTF-8 char encoding 

// outputs binary of buffer into hexadecimal notation 
console.log(buffer);
console.log(buffer[0]);

// outputs buffer data into string; does not convert binary data inside buffer
console.log(buffer.toString());

// outputs buffer data into JSON format; chars are in base 10 notation
console.log(buffer.toJSON());

// read a single code point; outputs binary data in base 10 notation
console.log(buffer[0]);

// write data into the buffer
buffer.write('work');
console.log(buffer.toString());
// 'work' overwrote 'Hell' characters of 'Hello'