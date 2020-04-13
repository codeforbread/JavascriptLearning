//http was part of node
//express is not part of node ie we used npm install express
let express = require('express');
let myExpressNodeApp = express();
myExpressNodeApp.get('/', function(req, res){
    res.send(`
        <form action="/answer" method="post">
            <p>What color is the sky on a clear and sunny day?</p>
            <input name="skyColor" autocomplete="off">
            <button>Submit Answer</button>
        </form>
    `)
})

myExpressNodeApp.post('/answer', function(req, res){
    res.send("Thank you for submitting your answer");
})

myExpressNodeApp.get('/answer', function(req, res){
    res.send("Are u lost there is nothing");
})

myExpressNodeApp.listen(3000);