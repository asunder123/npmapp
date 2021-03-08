var http = require("http");


var x = 10;
var y = 20;
// var z = x+y ;
var fs = require("fs");
var data = fs.readFileSync('ABNAmroIntro.txt');
console.log(data.toString());
// console.log(x+y);
console.log('Server running at http://127.0.0.1:8081/');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   //Send the response body as "Hello World"
   // response.end(z);
   response.end(data.toString());
   response.end('Hello World\n');

}).listen(8081);

console.log(listner1);
console.log(listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");