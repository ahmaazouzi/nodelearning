## A First Node Program => `Hello Node`:
- A first Node program is a familiar Javascript script:
```javascript
function hellNode(){
	console.log('Hello, World');
}

hellNode();
```
- Add the code above to a file and name it `app.js`. In the terminal this can be run as follows:
```sh
node app.js
```

## Modules:
- Functions like `console.log` are defined in the **`global`** module which is similar to the **window** object in a browser like Firefox or Chrome. `console.log('Hello, World')` is similar to `global.console.log('Hello, World')`.
- When defining a variable inside a js file in Node, this variable does not become part of the `global` object. This variable's scope is limited to the file it's defined within. Unlike browser JavaScript engines where a variable defined outside a function is literally a global, the Node environment is segmented into **modules** that have their own dependent scopes invisible by default to the global object and to other modules. To make a variable defined inside a JavaScript (or module), we need to **export**.
- Each Node application should have at least one file called the **main module**. This is usually called `app.js`. To get information about the main module (or current module), you use the following command:
```javascript
console.log(module):
```
it will spit out something like this:
```javascript
Module {
  id: '.',
  exports: [Function: hellNode], // This would be empty if nothing is exported.
  parent: null,
  filename: '/Users/lala/Tuts/js/node/index.js',
  loaded: false,
  children: [],
  paths:
   [ '/Users/lala/Tuts/js/node/node_modules',
     '/Users/lala/Tuts/js/node_modules',
     '/Users/lala/Tuts/node_modules',
     '/Users/lala/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }
```

## Exporting a Module:
- Functions from the following revolutionary module that makes the typing of the long `console.log()` obsolete is exported with **`module.exports`**:
```javascript
function log(something){
	console.log(something);
}
function logUC(something){
	console.log(something.toUpperCase());
}
module.exports.log = log;
module.exports.logUC = logUpperCase;
```
- One little detail is that `module.exports.log = log` exports and object that the `log()` function is part of. To export the function `log()` directly, you'd use `module.exports = log` instead.
- like a Java class or package, you'd keep private methods and variables which don't get exported. The variables and functions you'd export are equivalent to public members in Java.

## Loading a Module:
- To load (import) a module and make it usable/visible in another module, we use the **`require`** keyword. As follows:
```javascript
const require('./log'); // import same directory
const require('./somePath/log'); // import from subdirectory
const require('../log'); // import from parent directory
```
- Make the `require` a constant to not accidentally change it and make it unusable. 

## Module Wrapper Function:
- How does mode encapsulate data and functions. It simply wraps the code you write in a file inside a **module wrapper function** which is an **immediately invoked function expression** (**IIFE**) which follows this general structure:
```javascript
(function(exports, require, module, __filename, __dirname){
	// The code you write in module goes here.
})
```

                  
