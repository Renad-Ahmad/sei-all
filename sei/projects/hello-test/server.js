// Loading the express module on our server
const express = require('express');

// Creates a new instance of express on our server
const app = express();
// ********   Middleware      ******
// parse JSON request sent by the user
// and converts it into JS object before
// a route uses it
app.use(express.json());

app.get('/', function(req, res) { 
  // when a request comes in at localhost:3000, it will respond 
  res.send("hello from sei entropy hi numnum")
});

app.get('/greatings', function(req, res){
    console.log(req);
    console.log(res);

    res.send('greeting from your server')
});

app.get('/write', function(req, res){
    res.send(`hello im ${req.query.fisrt_name} ${req.query.last_name}`) 
})

app.get('/food/:food', function(req, res) {
    console.log(req.params);
    res.send(`i really love ${req.params.food}` )
    
})

app.get('/sightings', function(req, res){
    console.log(req.params);
    res.send(`my name is ${req.params.name} and i really love ${req.params.food}`)
})

app.get('/bigfoot', function(req, res){
    if(req.query.blurry==='true'){
        res.send('bigfoot is blurry')
    }
    else{
        res.send('bigfoot is real')
    }
})

app.get('/favorite/:noun', function(req, res) {
    if(req.query[req.params.noun]){
        res.send(`i have favorite ${req.params.favorite}, it is ${req.query[req.params.favorite]}`)
    }
    else{
        res.send(`i have favorite ${req.params.favorite}`)   
     }
    
})

// dummy data
let people = [
    {firstName: 'Hisham', lastName: 'Aljahbli'},
    {firstName: 'Mohammad', lastName: 'Jouza'},
    {firstName: 'Usman', lastName: 'Bashier'},
    {firstName: 'Sager', lastName: 'Alarifi'}
]
app.get('/api/people', function(req, res){
    res.json({
        people:people
    })
})

app.get('/api/people/:id', function(req, res){
    const personID =req.params.id
    const person =people[personID]

    if(person !== undefined){
        res.status(200).json({person:person})
    }
    else{
        res.status(406).json({error:'invalid'})
    }
})
   
app.get('/api/people', function(req, res){
    console.log(req.body);
    people.push(req.body.person);

    res.push(201).json({person:people})
   // res.send(req.body);

})

// tells the server where to listen for requests
const port = process.env.PORT || 3000;

app.listen(port, function() {
  // tells the server where to listen for requests on port 3000

  console.log(`hello-express is listening on port ${port}`);
}); // actualizing the line above