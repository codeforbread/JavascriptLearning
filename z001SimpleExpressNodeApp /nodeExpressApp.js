//http was part of node
//express is not part of node ie we used npm install express
let express = require('express');

let myExpressNodeApp = express();

//To access user input easily
myExpressNodeApp.use(express.urlencoded({extended: false}));

//Default homepage route
myExpressNodeApp.get('/', function(req, res){
    res.send(`
        <form action="/answer" method="post">
            <p>What is the color of sun ?</p>
            <input name="sunColorValue" autocomplete="off">
            <button>Submit Answer</button>
        </form>
    `)
})

//POST request happens when we send or post data to server
myExpressNodeApp.post('/answer', function(req, res){
    //to avoid case sensitive failure we convert skyColor to lowercase
    if(req.body.sunColorValue.toLowerCase() == 'yellow'){
        res.send(`
            <p>Congrats! Your answer is correct</p>
            <a href="/"> Back to homepage</a>
        `);
    } else {
        res.send(`
            <p>Sorry! Your answer is not correct</p>
            <a href="/"> Back to homepage</a>
        `);
    }
    
})

//get request happen when we go through url or navigation link
myExpressNodeApp.get('/answer', function(req, res){
    res.send("Are u lost there is nothing");
})

myExpressNodeApp.listen(3000);