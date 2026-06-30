setTimeout(() => console.log("timeout"));

setImmediate(() => console.log("immediate"));

Promise.resolve().then(() => console.log("promise"));

process.nextTick(() => console.log("nextTick"));

// Order of execution for the above code will be:
// 1. nextTick (process.nextTick is executed before any other microtasks)
// 2. promise (Promise microtasks are executed after nextTick but before macrotasks)
// 3. timeout (setTimeout is a macrotask and will be executed after all microtasks)
// 4. immediate (setImmediate is also a macrotask, but it is executed after setTimeout in this case)

// Why Immediate isn't Immediate?
// The reason setImmediate is not executed immediately 
// after the current operation is that it is a macrotask, and macrotasks are executed after all microtasks have been completed. 
// In this case, the microtasks (nextTick and promise) are executed first, followed by the macrotasks (timeout and immediate).