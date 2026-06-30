// __filename and __dirname are special variables in Node.js that provide the absolute path 
// of the current file and the directory containing the current file, respectively.
console.log(__filename);
console.log(__dirname);

// `require.cache` is an object that stores cached modules. 
// When a module is required, Node.js caches it in this object.
// This can be useful for debugging or for clearing the cache to reload a module.
console.log(require.cache);