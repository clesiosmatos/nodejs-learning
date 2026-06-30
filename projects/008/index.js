// This is a sample Node.js script that demonstrates how to log the current memory usage of the process. 
// The `process.memoryUsage()` method returns an object describing the memory usage 
// of the Node.js process, including properties such as `rss`, `heapTotal`, `heapUsed`, and `external`.
console.log(process.memoryUsage());