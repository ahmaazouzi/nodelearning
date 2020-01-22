# A Summary of ***The Art of Node*** by [Max Ogden](https://github.com/maxogden):
- Basically **Node** is a networked I/O tool. It is **asynchronous** and excells at **non-blocking I/O** operations.
- There are several **modules** that come with Node called **Node Core**. These already a lot of I/O and non-I/O operations such as `fs`, `net`, `http`, `dgram`, `url`, `path`, `querystring`, `buffer`, etc.
- Four fundamental concepts are crucial to understand Node and appreciate its power. These are: **callbacks**, **events**, **streams** and **modules**.

## Callbacks:
- The average JavaScript claims that a callback is just function passed as an argument into another argument, and it is asynchronous. They usually fail, however, to mention that not all callbacks are asynchronous. The *`array.map`* callback, for example, is not asynchronous. What makes a function asynchronous? Unless one is using an artificial async mechanism like `setTimeout`, or a **Promise**, **async/await** how would I make a function behave asynchronously?
- Anyways, while the order of operations and function calls follow the order they appear in in code, in asynchronous programming **"async programs may execute different functions at different times based on the order and speed that earlier functions like http requests or file system reads happen."**
- ***"The key to understanding callbacks is to realize that they are used when you don't know when some async operation will complete, but you do know where the operation will complete — the last line of the async function!The top-to-bottom order that you declare callbacks does not necessarily matter, only the logical/hierarchical nesting of them. First you split your code up into functions, and then use callbacks to declare if one function depends on another function finishing."***
- An asynchronous function like **`fs.readFile` is implemented as an EVENT LOOP**. ***"Node first dispatches the readFile operation and then waits for readFile to send it an event that it has completed. While it is waiting node can go check on other things. Inside node there is a list of things that are dispatched but haven't reported back yet, so node loops over the list again and again checking to see if they are finished. After they finished they get 'processed', e.g. any callbacks that depended on them finishing will get invoked."***
- If you have 3 async functions `a`, `b` and `c` and you want to run them one after the other in order, you nested them as in so called **callback hill**:
```javascript
a(function() {
  b(function() {
    c()
  })
})
```
- This article mentions the event loop that it's responsible for making certain functions asycnrhonous, but I still don't know how to make a function asynchronous. All I can do is understand how async functions work and modify my code to accommodate their nonlinear behavior. Almost the only way I can truly directly  delay the execution of a function is through `setTimeout()` and its sister methods.

## Events:
- The **event emitter**, whatever that is, is fundamental in using events. Using events of any sort in the node environment requires the use of the **`'events'`** module.
- Events are more or less manifestations of the **observer design pattern** (also called publisher-subscriber pattern). Events allow ***you subscribe to things. You can say 'when X do Y'***. A good scenarios where events are used include a chat room with multiple listeners.
- **`.on()`** in Node does the same thing as `addEventListener()` in browsers.

## Streams:
- The `Stream` API is used by both the file system and network APIs. Both the file system and network APIs do the same job, they are IO devices. The `Stream` API allow the two to be treated the same. The [stream-handbook](https://github.com/substack/stream-handbook), recommended by the writer of this document we are trying to summarize here can help you get a deeper insight into the topic of steams.

## Modules:
- Node core is made of a few modules centered around I/O operations, both filewise and networkwise. If you need custom modules of any kind, you can use NPM. The following command allows you to search NPM for packages using a keyword:
```sh
npm search gis
```

### Modular Development Workflow:
- Most package managers install packages globally. NPM chooses to install packages locally by default. Global packages in Node are an anti-pattern, just like.

### How `require` works:
- It searches for a module in the current folder. If it doesn't find it, it searches the subfolders of the current folder. If it doesn't find it in the subfolders of the current folder, it searches the parent folders of the current folder until it reaches the top of the file system tree. however, it doesn't check the subfolders of any of the current's parent folders. If not found, it checks the node global module folders.




