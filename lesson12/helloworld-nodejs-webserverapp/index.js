"use strict";
console.log("Starting server");
const http=require("http");
http.createServer((httpRequest,httpResponse)=>{
httpResponse.writeHead(200,{
    'Content-Type':'text/html'
});
httpResponse.end("Hello World from Http Server runing Http Server");
}).listen(8080);
