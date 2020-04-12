/*
console.log("HI ROck");
*/



/*
//working with res.
//res will send response when that url is pressed .
let http = require("http");
let simpleNodeApp = http.createServer(function(req,res){
    res.end("Hello, welcome to my website");
})
simpleNodeApp.listen(3000);
*/



/*
//Check url which we are using in browser
//We see that for different routes on same port (3000) it gives same output in browser 
let http = require("http");
let simpleNodeApp = http.createServer(function(req,res){
    console.log(req.url);
    res.end("Hello, welcome to my website");
})
simpleNodeApp.listen(3000);
*/



/*
//Display different message for different route
let http = require("http");
let simpleNodeApp = http.createServer(function(req,res){
    if(req.url == "/"){
        res.end("Hello, welcome to home page");
    }
    if(req.url == "/about"){
        res.end("Hello, welcome to about page");
    }
    if(req.url == "/contact"){
        res.end("Hello, welcome to contact page");
    }
})
simpleNodeApp.listen(3000);
*/



/*
//To handle if some route does not exist
let http = require("http");
let simpleNodeApp = http.createServer(function(req,res){
    if(req.url == "/"){
        res.end("Hello, welcome to home page");
    }
    if(req.url == "/about"){
        res.end("Hello, welcome to about page");
    }
    if(req.url == "/contact"){
        res.end("Hello, welcome to contact page");
    }
    res.end("Sorry , page does not exist");
})
simpleNodeApp.listen(3000);
*/



//http was part of node
//express is not part of node ie we used npm install express
