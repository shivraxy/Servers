let http = require('http');
let PORT1 = 7000;
let PORT2 = 7500;

function handleRequest1(request, response) {
    response.end("You are great !!!! " + request.url);
}

function handleRequest2(request, response) {
    response.end("You suck !!!! " + request.url);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
    console.log("Server1 listening at port" + PORT1);
})

server2.listen(PORT2, function() {
    console.log("Server2 listening at port" + PORT2);
})