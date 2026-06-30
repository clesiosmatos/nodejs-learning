console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

process.nextTick(() => {
  console.log('4');
});

console.log('5');

// Microtasks and Macrotasks have a specific order of execution. 
// Microtasks (like Promises and process.nextTick) are executed before macrotasks (like setTimeout). 
// Therefore, the expected output will be:
// 1
// 5
// 4
// 3
// 2