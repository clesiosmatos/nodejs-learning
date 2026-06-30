const fs = require('fs');

console.log('1'); // Current call stack

setTimeout(() => console.log('2 timeout'), 0); // Macrotask

setImmediate(() => console.log('3 immediate')); // Macrotask

Promise.resolve().then(() => console.log('4 promise')); // Microtask

process.nextTick(() => console.log('5 nextTick')); // Microtask

fs.readFile(__filename, () => { // Macrotask
  console.log('6 file read');
});

console.log('7'); // Current call stack

// Expected output order:
// 1
// 7
// 5 nextTick
// 4 promise
// 2 timeout
// 3 immediate
// 6 file read

