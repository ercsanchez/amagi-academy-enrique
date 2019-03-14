// 048 ES6 typed arrays

// param is size in bytes
const buffer = new ArrayBuffer(8);  // buffer can store 64 bits (8 bytes x 8 bits) of binary data

// create an array that can hold 32 bits for each base 10 integer you give it
const view = new Int32Array(buffer); // Int32 - a number stored with 32 bits
// can only store 2 numbers with this view because our buffer size is only 64 bits

view[0] = 5;  // converted to 32 bits of binary data
view[1] = 15; // converted to 32 bits of binary data
view[2] = 30; // buffer can't store this
console.log(view);